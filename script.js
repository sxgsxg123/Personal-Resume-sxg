const themeButton = document.querySelector('.theme-toggle');
const themeIcon = themeButton.querySelector('.theme-icon');
const themeText = themeButton.querySelector('.theme-text');

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const isDark = theme === 'dark';
  themeButton.setAttribute('aria-pressed', String(isDark));
  themeButton.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} mode`);
  themeIcon.textContent = isDark ? '☀' : '☾';
  themeText.textContent = isDark ? 'Light' : 'Dark';
}

let savedTheme;
try { savedTheme = localStorage.getItem('theme'); } catch { /* Storage may be unavailable. */ }
setTheme(savedTheme === 'light' || savedTheme === 'dark'
  ? savedTheme
  : matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

themeButton.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(nextTheme);
  try { localStorage.setItem('theme', nextTheme); } catch { /* The toggle still works. */ }
});

document.getElementById('year').textContent = new Date().getFullYear();
