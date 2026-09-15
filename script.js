const navbar = document.getElementById("navbar");
const openButton = document.getElementById("open-sidebar-button");
const overlay = document.getElementById("overlay");

function openSidebar() {
  navbar.classList.add("show");
  overlay.classList.add("show");
  openButton.setAttribute('aria-expanded', 'true');
}

function closeSidebar() {
  navbar.classList.remove("show");
  overlay.classList.remove("show");
  openButton.setAttribute('aria-expanded', 'false');
}