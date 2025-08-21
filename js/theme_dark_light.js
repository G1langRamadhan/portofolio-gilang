// theme, remember preference
const storedTheme = localStorage.getItem('theme');
if (
  storedTheme === 'dark' ||
  (!storedTheme &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  html.classList.add('dark');
}

const toggleTheme = () => {
  html.classList.toggle('dark');
  localStorage.setItem(
    'theme',
    html.classList.contains('dark') ? 'dark' : 'light'
  );
};

document
  .getElementById('theme-toggle')
  .addEventListener('click', toggleTheme);