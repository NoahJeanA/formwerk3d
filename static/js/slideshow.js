function initSlideshow(slideshow) {
  const slides = slideshow.querySelectorAll('.slide');
  const dots = slideshow.querySelectorAll('.dot');
  const prevBtn = slideshow.querySelector('.slide-nav.prev');
  const nextBtn = slideshow.querySelector('.slide-nav.next');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const interval = 4000;

  if (!slides.length) return;

  let index = 0;
  let timer = null;

  function show(newIndex) {
    slides[index].classList.remove('active');
    slides[index].setAttribute('aria-hidden', 'true');
    dots[index].classList.remove('active');
    dots[index].removeAttribute('aria-current');
    index = (newIndex + slides.length) % slides.length;
    slides[index].classList.add('active');
    slides[index].setAttribute('aria-hidden', 'false');
    dots[index].classList.add('active');
    dots[index].setAttribute('aria-current', 'true');
  }

  function next() {
    show(index + 1);
  }

  function prev() {
    show(index - 1);
  }

  function startAuto() {
    if (reduceMotion) return;
    timer = setInterval(next, interval);
  }

  function restartAuto() {
    clearInterval(timer);
    startAuto();
  }

  nextBtn.addEventListener('click', () => {
    next();
    restartAuto();
  });

  prevBtn.addEventListener('click', () => {
    prev();
    restartAuto();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      show(i);
      restartAuto();
    });
  });

  startAuto();
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.slideshow').forEach(initSlideshow);
});
