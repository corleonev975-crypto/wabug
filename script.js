const splashScreen = document.getElementById("splashScreen");
const loginPage = document.getElementById("loginPage");
const appPage = document.getElementById("appPage");
const loginForm = document.getElementById("loginForm");
const navButtons = document.querySelectorAll(".nav-btn");
const tabPages = document.querySelectorAll(".tab-page");
const profileBtn = document.getElementById("profileBtn");

window.addEventListener("load", () => {
  setTimeout(() => {
    splashScreen.classList.add("hide");
  }, 1200);
});

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    alert("Isi username dan password dulu.");
    return;
  }

  loginPage.classList.remove("active-page");
  appPage.classList.add("active-page");
});

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetTab = button.getAttribute("data-tab");

    navButtons.forEach((btn) => btn.classList.remove("active"));
    tabPages.forEach((tab) => tab.classList.remove("active-tab"));

    button.classList.add("active");
    document.getElementById(targetTab).classList.add("active-tab");
  });
});

profileBtn.addEventListener("click", () => {
  appPage.classList.remove("active-page");
  loginPage.classList.add("active-page");
});
