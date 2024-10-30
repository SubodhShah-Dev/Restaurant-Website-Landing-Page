import './main.css';
import { gsap } from 'gsap';

import progressIcon from './components/progressicon.js';
import drawerToggle from './components/drawer.js';

function heroInfo() {
  const tl = gsap.timeline();
  tl.from('.hero-para', {
    y: -75,
    opacity: 0,
    duration: 2,
    ease: 'power1.inOut',
  });
  tl.from('.hero-info h1', {
    x: -100,
    opacity: 0,
    duration: 2,
    ease: 'power2.inOut',
  });
}
function main() {
  drawerToggle();
  heroInfo();
  progressIcon();
}

main();
