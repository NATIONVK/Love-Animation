<!-- I LOVE YOU — INFINITY | NATIONVK -->

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Cormorant+Garamond&size=36&pause=1100&color=FF8DB4&center=true&vCenter=true&width=820&lines=I+LOVE+YOU+%E2%80%94+INFINITY;A+cinematic+story+written+in+starlight;IN+EVERY+UNIVERSE.+ALWAYS+YOU." alt="I Love You — Infinity" />
</p>

<h1 align="center">❤️ I LOVE YOU — INFINITY</h1>
<p align="center"><strong>One page. Fifteen moments. One infinite feeling.</strong><br/>An immersive romantic animation experience made with HTML, CSS and JavaScript.</p>

<p align="center">
  <a href="https://nationvk.github.io/Love-Animation/"><img src="https://img.shields.io/badge/OPEN-LIVE%20EXPERIENCE-ff6f9f?style=for-the-badge&logo=githubpages&logoColor=white" alt="Open live experience"/></a>
  <img src="https://img.shields.io/badge/SCENES-15-c58be8?style=for-the-badge" alt="15 scenes"/>
  <img src="https://img.shields.io/badge/RENDERER-CANVAS%202D-7b9cff?style=for-the-badge" alt="Canvas 2D"/>
  <img src="https://img.shields.io/badge/MOBILE-READY-69c9a5?style=for-the-badge" alt="Mobile ready"/>
</p>
<p align="center">
  <a href="https://github.com/NATIONVK/Love-Animation/actions"><img src="https://img.shields.io/github/actions/workflow/status/NATIONVK/Love-Animation/pages.yml?branch=main&label=Pages%20deployment&logo=githubactions" alt="Pages deployment status"/></a>
  <a href="https://github.com/NATIONVK/Love-Animation"><img src="https://img.shields.io/github/last-commit/NATIONVK/Love-Animation?color=blueviolet" alt="Last commit"/></a>
  <img src="https://img.shields.io/badge/license-MIT-9b8cff.svg" alt="MIT license"/>
</p>

---

## 🌌 The idea

**I LOVE YOU — INFINITY** is designed to feel like a romantic short film playing inside a single webpage. It opens with a cinematic introduction, then moves through fifteen animated moments on one full-screen canvas.

The experience does not navigate to separate HTML pages. Scene changes happen inside the same canvas, with a soft **3.8-second fade, zoom and blur transition** to help each chapter flow into the next. Each scene still has its own timed chapter, and viewers can move between them manually at any time.

## ✨ The 15 cinematic chapters

| # | Chapter | Atmosphere |
|---:|---|---|
| 01 | Infinity Galaxy | A glowing heart surrounded by a spiral galaxy |
| 02 | A Heart Made of Stars | A luminous heart with orbiting energy rings |
| 03 | The Rose Universe | A moonlit garden filled with roses and fireflies |
| 04 | The Rain of Love | A neon night, falling rain and a glowing heart |
| 05 | The Moonlight Experience | A quiet moonlit sky and shimmering water |
| 06 | A Letter from My Heart | An animated envelope and a personal love letter |
| 07 | Forever & Always | A glowing infinity path and a heart of light |
| 08 | The Butterfly Garden | Floating butterflies and a dreamlike garden |
| 09 | A Sky Full of Wishes | Golden lanterns drifting through the night |
| 10 | The Heart Ocean | Moonlight, moving waves and reflections |
| 11 | A Firework of Love | Bursts of colourful particles across the sky |
| 12 | Cherry Blossom Dream | Soft petals falling through a romantic garden |
| 13 | Two Hearts, One Home | Two glowing hearts drawing closer together |
| 14 | The Grand Finale | A large luminous heart and a final declaration |
| 15 | Always You | A quiet closing moment, made to last |

## 🎞️ How the animation flows

- A single full-screen HTML canvas is used throughout the experience.
- JavaScript draws each chapter and animates its particles, light, hearts and atmosphere.
- When a chapter changes, the previous canvas image fades away while the next chapter appears, with a gentle zoom and blur.
- The sequence advances automatically, but viewers remain in control with pause, replay, previous, next and direct chapter selection.
- This is a Canvas 2D cinematic effect, not a pre-rendered video or a WebGL/Three.js 3D scene.

## 🎛️ Controls

| Control | What it does |
|---|---|
| Start | Begins the experience |
| Pause / Resume | Pauses or resumes the sequence |
| Previous / Next | Moves between chapters |
| Replay | Starts again from the beginning |
| Chapter selector | Jumps directly to a chosen chapter |
| Music | Turns ambient audio on or off |
| Settings | Opens visual and motion settings |
| Fullscreen | Expands the experience to fullscreen |

**Keyboard:** Space pauses/resumes · Left arrow previous chapter · Right arrow next chapter.

## 💗 Make the story yours

Open **Settings → Customize Your Message** to personalize:

- Recipient name
- Sender name
- Opening title
- Final message
- Heart colour

Your customization is stored locally in the browser. It is not uploaded to a server.

## 🎧 Sound & visual settings

- Optional ambient sound generated in the browser with the Web Audio API.
- Adjustable volume.
- Low, Medium and High visual quality settings.
- Reduced Motion option.
- Cinematic mode can hide the controls for a cleaner viewing experience.
- Fullscreen support.

> Tip: Start the experience first, then enable sound if your browser requires a user interaction before audio can play.

## 📱 Built for phones and desktops

- Responsive layout for mobile and desktop browsers.
- Canvas rendering with delta-time animation updates.
- Capped device pixel ratio and configurable particle budgets to help manage performance.
- Touch-friendly controls.
- Reduced-motion support.
- Optional service-worker caching for repeat visits after the first successful load.

Performance may vary by device and browser. High visual quality uses more rendering resources; choose Low or Medium on devices where you notice slowdowns.

## 🚀 Open the experience

<p align="center"><a href="https://nationvk.github.io/Love-Animation/"><strong>❤️ EXPERIENCE IT LIVE</strong></a></p>

- **Live website:** https://nationvk.github.io/Love-Animation/
- **Source code:** https://github.com/NATIONVK/Love-Animation
- **Deployment history:** https://github.com/NATIONVK/Love-Animation/actions

If the website is not updated immediately after a commit, check the Actions page and wait for the GitHub Pages workflow to complete.

## 🧰 Run locally

The project uses native browser technologies and JavaScript ES modules. Serve it through localhost rather than opening index.html directly.

```bash
git clone https://github.com/NATIONVK/Love-Animation.git
cd Love-Animation
python -m http.server 8000
```

Open http://localhost:8000 in your browser.

## 🌐 Publish with GitHub Pages

1. Open the repository's **Settings → Pages**.
2. Under **Build and deployment**, select **Deploy from a branch** if that is the configured publishing method.
3. Choose the main branch and root folder, then save.
4. Open the **Actions** tab and confirm the Pages workflow completes successfully.
5. Visit https://nationvk.github.io/Love-Animation/.

The repository also includes a Pages workflow at .github/workflows/pages.yml.

## 🗂️ Project structure

```text
Love-Animation/
├── index.html
├── css/
│   ├── main.css
│   ├── scenes.css
│   └── animations.css
├── js/
│   ├── app.js
│   ├── scene-manager.js
│   ├── particle-engine.js
│   ├── heart-engine.js
│   ├── camera-engine.js
│   ├── audio-engine.js
│   └── customization.js
├── manifest.json
├── service-worker.js
├── README.md
├── LICENSE
└── .github/
    └── workflows/
        └── pages.yml
```

## 🛠️ Technology

- **HTML5** — page structure and experience interface
- **CSS3** — responsive layout, overlays and interface animations
- **JavaScript ES Modules** — scene orchestration and animation logic
- **Canvas 2D** — hearts, particles, stars, light and cinematic backgrounds
- **Web Audio API** — generated ambient tones
- **Service Worker** — optional offline caching
- **GitHub Pages + GitHub Actions** — hosting and deployment

No account, backend, API key or external database is required.

## 📄 License

This project is available under the **MIT License**. See [LICENSE](./LICENSE).

---

<p align="center">
  <strong>Out of all the stars in the universe, my heart found its way to you.</strong><br/>
  <em>I LOVE YOU. INFINITY. ❤️</em>
</p>
<p align="center">Made with love by <strong>NATIONVK</strong></p>
