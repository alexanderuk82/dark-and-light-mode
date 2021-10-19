'use strict';
const toggleBtn = document.querySelector('.nav__toggle');

toggleBtn.addEventListener('click', e => {
  const html = document.querySelector('html');
  if (html.classList.contains('light')) {
    html.classList.remove('light');
    e.target.innerHTML = 'Light<br>mode';
    e.target.classList.remove('active');
  } else {
    html.classList.add('light');
    e.target.innerHTML = 'Dark<br>mode';
    e.target.classList.add('active');
  }
});
