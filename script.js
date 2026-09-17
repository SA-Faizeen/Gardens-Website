let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let messageInput = document.getElementById("message");

let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let messageError = document.getElementById("messageError");

let errorTimeout = 3000;

// Theme Switcher //
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);

  if (theme === "system") {
    document.documentElement.style.colorScheme = "light dark";
  } else {
    document.documentElement.style.colorScheme = theme;
  }

  const icon = document.getElementById("theme-icon");
  if (icon) {
    if (theme === "dark") {
      icon.className = "ti ti-moon";
    } else if (theme === "system") {
      icon.className = "ti ti-device-desktop";
    } else {
      icon.className = "ti ti-sun";
    }
  }

  const toggleButton = document.getElementById("theme-toggle");
  if (toggleButton) {
    if (theme === "dark") {
      toggleButton.setAttribute("aria-label", "Theme: dark. Click to change.");
      toggleButton.setAttribute("title", "Theme: dark. Click to change.");
    } else if (theme === "system") {
      toggleButton.setAttribute(
        "aria-label",
        "Theme: system. Click to change.",
      );
      toggleButton.setAttribute("title", "Theme: system. Click to change.");
    } else {
      toggleButton.setAttribute("aria-label", "Theme: light. Click to change.");
      toggleButton.setAttribute("title", "Theme: light. Click to change.");
    }
  }
}

applyTheme(document.documentElement.getAttribute("data-theme") || "system");

function toggleTheme() {
  const currentTheme =
    document.documentElement.getAttribute("data-theme") || "system";

  let nextTheme;
  if (currentTheme === "light") {
    nextTheme = "dark";
  } else if (currentTheme === "dark") {
    nextTheme = "system";
  } else {
    nextTheme = "light";
  }

  applyTheme(nextTheme);
  localStorage.setItem("theme", nextTheme);
}

// Mobile sidebar //
function openSidebar() {
  document.getElementById("navbar").classList.add("show");
  document.getElementById("overlay").classList.add("show");
  document
    .getElementById("open-sidebar-button")
    .setAttribute("aria-expanded", "true");
}

function closeSidebar() {
  document.getElementById("navbar").classList.remove("show");
  document.getElementById("overlay").classList.remove("show");
  document
    .getElementById("open-sidebar-button")
    .setAttribute("aria-expanded", "false");
}

function removeAll() {
  document.querySelectorAll(".error-text").forEach((error) => {
    error.hidden = true;
  });
}

document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", () => {
    closeSidebar();
  });
});

// Form validation //
function invalidName() {
  nameError.hidden = false;
  setTimeout(() => {
    nameError.hidden = true;
  }, errorTimeout);
}

function invalidEmail() {
  emailError.hidden = false;
  setTimeout(() => {
    emailError.hidden = true;
  }, errorTimeout);
}

function invalidMessage() {
  messageError.hidden = false;
  setTimeout(() => {
    messageError.hidden = true;
  }, errorTimeout);
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

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    submitForm();
  }
});
