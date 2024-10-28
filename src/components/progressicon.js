import { gsap } from 'gsap';

function progressIcon() {
  const borderCircle = document.querySelector('#border');
  const length = borderCircle.getTotalLength();

  borderCircle.style.strokeDasharray = length;
  borderCircle.style.strokeDashoffset = length;

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const fillAmount = (scrollPosition / maxScroll) * length;

    gsap.to(borderCircle, {
      strokeDashoffset: length - fillAmount,
      duration: 0.5,
      ease: 'power2.out',
    });
  });

  document.getElementById('scrollToTop').addEventListener('click', function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

export default progressIcon;
