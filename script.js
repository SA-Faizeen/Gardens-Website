const navbar = document.getElementById("navbar")
const openButton = document.getElementById("open-sidebar-button")


function openSidebar() {
	navbar.classList.add("show")
	openButton.setAttribute('aria-expanded', 'true')
}
function closeSidebar() {
	navbar.classList.remove("show")
	openButton.setAttribute('aria-expanded', 'false')
}
