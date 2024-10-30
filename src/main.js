import './main.css';
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

import progressIcon from './components/progressicon.js';
import drawerToggle from './components/drawer.js';
// gsap.registerPlugin(ScrollTrigger);

function heroInfo() {
  const tl = gsap.timeline();
  tl.from('.hero-info h1', {
    x: -500,
    opacity: 0,
    duration: 2,
    ease: 'sine',
  });
}
function main() {
  drawerToggle();
  heroInfo();
  progressIcon();
}

main();
