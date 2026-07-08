document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.getElementById('nav-links');
  if (!toggle || !links) return;

  function setOpen(isOpen) {
    links.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    toggle.setAttribute('aria-label', isOpen ? 'Menü schließen' : 'Menü öffnen');
  }

  toggle.addEventListener('click', () => {
    setOpen(!links.classList.contains('open'));
  });

  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });
});
