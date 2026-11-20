export class ParticleEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.items = [];
    this.quality = 'medium';
    this.width = 1;
    this.height = 1;
    this.time = 0;
    this.spawnClock = 0;
    this.limit = 420;
  }
  configure(quality) {
    this.quality = quality;
    this.limit = quality === 'low' ? 110 : quality === 'high' ? 900 : 420;
  }
  resize(width, height) { this.width = width; this.height = height; }
  reset() { this.items.length = 0; this.spawnClock = 0; }
  emit(x, y, count = 1, kind = 'spark', spread = 1) {
    for (let i = 0; i < count && this.items.length < this.limit; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = (.2 + Math.random() * 1.5) * spread;
      this.items.push({
        x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
        life: 1, decay: .0015 + Math.random() * .004,
        size: 1 + Math.random() * 2.7, kind,
        phase: Math.random() * 6.28, rot: Math.random() * 6.28,
        spin: (Math.random() - .5) * .04
      });
    }
  }
  burst(x, y, count = 60, kind = 'spark') { this.emit(x, y, count, kind, 2.8); }
  update(dt, scene, width, height) {
    this.time += dt;
    this.spawnClock += dt;
    const rate = this.quality === 'low' ? 9 : this.quality === 'high' ? 42 : 21;
    while (this.spawnClock > 1 / rate) {
      this.spawnClock -= 1 / rate;
      if (this.items.length >= this.limit) continue;
      const x = Math.random() * width;
      let kind = 'spark';
      if (scene === 2 || scene === 11 || scene === 13) kind = 'petal';
      if (scene === 3) kind = 'rain';
      if (scene === 8) kind = 'lantern';
      if (scene === 9) kind = 'bubble';
      if (scene === 7) kind = 'firefly';
      this.items.push({
        x, y: kind === 'rain' ? -10 : height + 10,
        vx: (Math.random() - .5) * .35,
        vy: kind === 'rain' ? 5 + Math.random() * 7 : -(.25 + Math.random() * .8),
        life: 1, decay: .0005 + Math.random() * .0018,
        size: 1 + Math.random() * 3, kind,
        phase: Math.random() * 6.28, rot: Math.random() * 6.28,
        spin: (Math.random() - .5) * .035
      });
    }
    for (const p of this.items) {
      p.x += p.vx * dt * 60 + Math.sin(this.time * 1.5 + p.phase) * .2;
      p.y += p.vy * dt * 60;
      p.rot += p.spin * dt * 60;
      p.life -= p.decay * dt * 60;
      if (p.kind === 'rain' && p.y > height + 20) p.life = 0;
      if (p.y < -30 || p.x < -30 || p.x > width + 30) p.life = 0;
    }
    this.items = this.items.filter(p => p.life > 0);
  }
  render(ctx) {
    for (const p of this.items) {
      ctx.save();
      ctx.globalAlpha = Math.max(0, Math.min(1, p.life)) * (p.kind === 'rain' ? .5 : .8);
      if (p.kind === 'petal') {
        ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.fillStyle = '#ff9db8';
        ctx.beginPath(); ctx.ellipse(0, 0, p.size * 1.5, p.size * .7, 0, 0, Math.PI * 2); ctx.fill();
      } else if (p.kind === 'rain') {
        ctx.strokeStyle = '#b7d9ff'; ctx.lineWidth = .8;
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.x - 2, p.y + 10); ctx.stroke();
      } else if (p.kind === 'lantern') {
        ctx.fillStyle = '#ffc978'; ctx.shadowBlur = 16; ctx.shadowColor = '#ffad4d';
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2); ctx.fill();
      } else if (p.kind === 'bubble') {
        ctx.strokeStyle = '#9beaff'; ctx.beginPath(); ctx.arc(p.x, p.y, p.size * 1.7, 0, Math.PI * 2); ctx.stroke();
      } else {
        ctx.fillStyle = p.kind === 'firefly' ? '#ffe8a5' : '#ffd9e7';
        ctx.shadowBlur = 12; ctx.shadowColor = ctx.fillStyle;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();
      }
      ctx.restore();
    }
  }
}