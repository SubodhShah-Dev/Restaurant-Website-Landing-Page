import './styles.css';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

import navbarLinks from './components/navbarlinks.js';
import progressIcon from './components/progressicon.js';
import drawerToggle from './components/drawer.js';
// gsap.registerPlugin(ScrollTrigger);
function main() {
  navbarLinks();
  drawerToggle();
  progressIcon();
}

main();
