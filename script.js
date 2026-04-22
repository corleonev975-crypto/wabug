const splash = document.getElementById('splashScreen');
const loginPage = document.getElementById('loginPage');
const appPage = document.getElementById('appPage');
const loginForm = document.getElementById('loginForm');
const navButtons = document.querySelectorAll('.nav-btn');
const tabs = document.querySelectorAll('.tab-page');
const audioToggle = document.getElementById('audioToggle');

window.addEventListener('load', () => {
  setTimeout(() => splash.classList.add('hide'), 1200);
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = document.getElementById('username').value.trim();
  const pass = document.getElementById('password').value.trim();
  if (!user || !pass) {
    alert('Isi username dan password dulu.');
    return;
  }
  loginPage.classList.remove('active-page');
  appPage.classList.add('active-page');
});

navButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-tab');
    navButtons.forEach((b) => b.classList.remove('active'));
    tabs.forEach((tab) => tab.classList.remove('active-tab'));
    btn.classList.add('active');
    document.getElementById(target).classList.add('active-tab');
  });
});

let soundOn = true;
audioToggle.addEventListener('click', () => {
  soundOn = !soundOn;
  audioToggle.textContent = soundOn ? '🔊' : '🔈';
});
