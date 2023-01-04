const searchBtn = document.getElementById("search-btn");
const searchBtnRemove = document.getElementById("search-btnRemove");
const searchForm = document.getElementById("search-form");
const searchNav = document.querySelector(".navigation__search");

searchBtn.addEventListener("click", () => {
  searchForm.classList.add("slip__down");
  searchBtn.classList.add("none");
  searchBtnRemove.classList.remove("none");
});

searchBtnRemove.addEventListener("click", () => {
  searchForm.classList.remove("slip__down");
  searchBtn.classList.remove("none");
  searchBtnRemove.classList.add("none");
});

// sidebar
const sidebarOpen = document.getElementById("sidebarOpen");
const sidebarSlip = document.querySelector(".sidebar");
const sidebarClose = document.querySelector(".sidebar__header");

sidebarOpen.addEventListener("click", () => {
  sidebarSlip.classList.add("slip__left");
});

sidebarClose.addEventListener("click", () => {
  sidebarSlip.classList.remove("slip__left");
});

// SideBtn
const signBtnOpen = document.getElementById("SignBtn");
const signSlip = document.querySelector(".header__action-sign");
const signBtnClose = document.getElementById("signBtnClose");

signBtnOpen.addEventListener("click", () => {
  signSlip.classList.add("slip__left");
});

signBtnClose.addEventListener("click", () => {
  signSlip.classList.remove("slip__left");
});

// Navbar

const navbarBtnOpen = document.getElementById("navbarBtnOpen");
const navbarSlip = document.querySelector(".middle__nav");
const navbarBtnClose = document.getElementById("navbarBtnClose");

navbarBtnOpen.addEventListener("click", () => {
  navbarSlip.classList.add("slip__right");
});

navbarBtnClose.addEventListener("click", () => {
  navbarSlip.classList.remove("slip__right");
});
