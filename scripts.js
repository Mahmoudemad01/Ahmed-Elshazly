// Dark mode toggle function
const modeToggleButton = document.getElementById('mode-toggle');
const body = document.body;

modeToggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});
