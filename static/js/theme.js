document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.theme-toggle');
  if (!toggle) return;

  const root = document.documentElement;

  function currentTheme() {
    const explicit = root.getAttribute('data-theme');
    if (explicit) return explicit;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function updateLabel() {
    const isDark = currentTheme() === 'dark';
    toggle.setAttribute('aria-label', isDark ? 'Zu hellem Modus wechseln' : 'Zu dunklem Modus wechseln');
  }

  toggle.addEventListener('click', () => {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateLabel();
  });

  updateLabel();
});
