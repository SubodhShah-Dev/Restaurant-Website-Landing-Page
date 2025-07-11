import { gsap } from 'gsap';

export function heroInfo() {
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
    duration: 1,
    stagger: 1,
    ease: 'none',
  });
}
