import {drawHeart,drawInfinity} from './heart-engine.js';
const copy=[
{k:'THE INFINITY GALAXY',t:'Somewhere in this infinite universe...',b:'YOU ARE MY FAVOURITE PLACE.',d:23},
{k:'A HEART MADE OF STARS',t:'A thousand little lights.',b:'One feeling. One heartbeat. One you.',d:20},
{k:'THE ROSE UNIVERSE',t:'If I could give you one thing...',b:'I would give you the ability to see yourself through my eyes.',d:23},
{k:'THE RAIN OF LOVE',t:'Even in my darkest moments...',b:'...you are my light.',d:20},
{k:'THE MOONLIGHT EXPERIENCE',t:'Under a million stars...',b:'MY HEART STILL FINDS YOU.',d:21},
{k:'A LETTER FROM MY HEART',t:'Some feelings deserve to be written.',b:'A little letter, carrying a universe of words.',d:24,letter:true},
{k:'FOREVER & ALWAYS',t:'Not just for a moment.',b:'Not just for a lifetime. FOREVER & ALWAYS.',d:20},
{k:'THE BUTTERFLY GARDEN',t:'You bring colour to every ordinary day.',b:'Even the smallest things bloom around you.',d:19},
{k:'A SKY FULL OF WISHES',t:'If wishes could fly...',b:'Every lantern would carry your name.',d:19},
{k:'THE HEART OCEAN',t:'My love is not a passing wave.',b:'It is an ocean, finding its way back to you.',d:20},
{k:'A FIREWORK OF LOVE',t:'Some moments deserve the whole sky.',b:'And you are worth every light in it.',d:18},
{k:'CHERRY BLOSSOM DREAM',t:'Like spring finding its way...',b:'You make everything feel new again.',d:19},
{k:'TWO HEARTS, ONE HOME',t:'Two distant lights...',b:'One beautiful place where they meet.',d:20},
{k:'THE GRAND FINALE',t:'OUT OF ALL THE STARS IN THE UNIVERSE',b:'I LOVE YOU. INFINITY.',d:24,finale:true},
{k:'ALWAYS YOU',t:'In every universe. In every lifetime.',b:'My heart found its way to you.',d:18,finale:true}
];
export class SceneManager{constructor(){this.scenes=copy;this.index=-1;this.elapsed=0;this.duration=20;this.paused=false;this.onChange=()=>{};this.completed=false}start(){this.go(0)}go(i){this.index=Math.max(0,Math.min(this.scenes.length-1,i));this.elapsed=0;this.duration=this.scenes[this.index].d;this.completed=false;this.onChange(this.current(),this.index);return this.current()}next(){return this.go(this.index+1>=this.scenes.length?0:this.index+1)}prev(){return this.go(this.index-1<0?0:this.index-1)}current(){return this.scenes[this.index]}update(dt){if(this.index<0||this.paused)return;this.elapsed+=dt;if(this.elapsed>=this.duration){if(this.index<this.scenes.length-1)this.next();else this.completed=true}}progress(){return this.index<0?0:Math.min(1,this.elapsed/this.duration)}select(i){return this.go(i)}}