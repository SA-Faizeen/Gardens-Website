let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let messageInput = document.getElementById("message");

let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let messageError = document.getElementById("messageError");

let errorTimeout = 3000;

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document.documentElement.style.colorScheme = theme;

  const icon = document.getElementById("theme-icon");
  if (icon) {
    icon.className = theme === "dark" ? "ti ti-sun" : "ti ti-moon";
  }
}

function toggleTheme() {
  const currentTheme =
    document.documentElement.getAttribute("data-theme") || "light";
  const targetTheme = currentTheme === "dark" ? "light" : "dark";

  applyTheme(targetTheme);
  localStorage.setItem("theme", targetTheme);
}

function openSidebar() {
  document.getElementById("navbar").classList.add("show");
  document.getElementById("overlay").classList.add("show");
  document.getElementById("open-sidebar-button").setAttribute("aria-expanded", "true");
}

function closeSidebar() {
  document.getElementById("navbar").classList.remove("show");
  document.getElementById("overlay").classList.remove("show");
  document.getElementById("open-sidebar-button").setAttribute("aria-expanded", "false");
}

function removeAll() {
  document.querySelectorAll(".error-text").forEach((error) => {
    error.hidden = true;
  });
}

function invalidName() {
  nameError.hidden = false;
  setTimeout(() => { nameError.hidden = true; }, errorTimeout);
}

function invalidEmail() {
  emailError.hidden = false;
  setTimeout(() => { emailError.hidden = true; }, errorTimeout);
}

function invalidMessage() {
  messageError.hidden = false;
  setTimeout(() => { messageError.hidden = true; }, errorTimeout);
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function submitForm(event) {
  if (event) event.preventDefault();
  removeAll();

  let isValid = true;

  if (!nameInput.value.trim()) {
    invalidName();
    isValid = false;
  }

  if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
    invalidEmail();
    isValid = false;
  }

  if (!messageInput.value.trim()) {
    invalidMessage();
    isValid = false;
  }

  if (isValid) {
    alert("Thank you! Your message has been sent.");
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  }
}