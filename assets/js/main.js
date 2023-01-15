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

// SignBtn
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

// Translator
const translatorBtnOpen = document.getElementById("translatorBtnOpen");
const translatorSlip = document.querySelector(".middle__nav-translator");
const translatorBtnClose = document.getElementById("translatorBtnClose");
const firstNav = document.querySelector(".middle__first__navigation");

translatorBtnOpen.addEventListener("click", () => {
  firstNav.classList.add("slip");
  translatorSlip.classList.add("slip__up");
});

translatorBtnClose.addEventListener("click", () => {
  firstNav.classList.add("slip__up");
  firstNav.classList.remove("slip");
  translatorSlip.classList.remove("slip__up");
});

const listNameClub = [
  "DON'T MISS",
  "Home",
  "Schedule",
  "First Team Results",
  "First Team Schedule",
];

const listFirstTeams = [
  "FIRST TEAM",
  "Latest",
  "Schedule",
  "Tickets",
  "Results",
  "Standings",
  "Players",
  "Photos",
  "Honours",
  "Features",
];

const listTicketsandMuseum = [
  "TICKETS & MUSEUM",
  "Men's Football",
  "VIP Men's Football",
  "Tour & museum",
  "Basketball",
  "VIP Basketball",
  "Women's Football",
  "Barcaland",
  "Barca Atletic",
  "Handball",
  "Fulsal",
  "Roller-Hockey",
  "Ice Rink",
  "Packs and Promotions",
  "All about tickets",
  "Barca Business",
  "Barca Cafe",
];

const listBarcaTVs = [
  "BARÇA TV+",
  "Home",
  "Live TV",
  "My List",
  "Barca & the World Cup",
  "Subscriptio & Prices",
  "Players",
];

const listClubs = [
  "CLUB",
  "Espai Barca",
  "Lastest",
  "Culers",
  "Kids",
  "Schedule",
  "Members",
  "More than a Club",
  "Identity",
  "Partners",
  "History",
  "Barca Foundation",
  "Barca Academy",
];

const listBarcaTeams = [
  "BARCA TEAMS",
  "Football",
  "Basketball",
  "Handball",
  "Futsal",
  "Roller Hockey",
  "Esports",
];

const listSubFootball = [
  "First Team",
  "Women's",
  "Barça Atlètic",
  "FC Barcelona U19A",
  "Barça Legends",
  "Barça Youth",
  "Barça Genuine F.",
  "Summer Camp",
];

const listSubBasketball = ["First Team"];

const listSubHandball = ["First Team"];

const listSubBFutsal = ["First Team"];

const listSubRollerHockey = ["First Team"];

const listSuEsports = ["eFootball PES", "League of Legends"];

const listMiddleContent = document.getElementById("renderData");
const listMiddleContents = document.querySelectorAll(
  ".middle__first__navigation-item"
);

function renderData(array) {
  listMiddleContent.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    if (i == 0) {
      listMiddleContent.innerHTML += `
      <li class="middle__second__navigation-item title">
        <a href="#!">${array[i]}</a>
      </li>
    `;
    } else {
      listMiddleContent.innerHTML += `
      <li class="middle__second__navigation-item">
        <a href="#!">${array[i]}</a>
      </li>
    `;
    }
  }
}

function renderDataPlus(array) {
  listMiddleContent.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    if (i == 0) {
      listMiddleContent.innerHTML += `
      <li class="middle__second__navigation-item title">
        <a href="#!"><span>${array[i]}</span></a>
      </li>
    `;
    } else {
      listMiddleContent.innerHTML += `
      <li class="middle__second__navigation-item" id="${array[i]}" onclick="btnToggle(this)">
        <a href="#!">
          <span>${array[i]}</span>
          <i class="fa-solid fa-plus"></i>
        </a>
        <ul class="middle__second__navigation-subList"></ul>
      </li>
    `;
    }
  }
}

function renderSubData(array, content) {
  content.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    content.innerHTML += `
      <li class="middle__second__navigation-subItem">
        <a href="#!">${array[i]}</a>
      </li>
    `;
  }
}

function activeElement(elements) {
  elements.forEach((e) => {
    e.classList.remove("active");
  });
}

function HandlerClick(event) {
  if (event.id === "firstteams") {
    renderData(listFirstTeams);
    activeElement(listMiddleContents);
    event.classList.add("active");
    checkClassList(listMiddleContent);
  } else if (event.id === "tickets") {
    renderData(listTicketsandMuseum);
    activeElement(listMiddleContents);
    event.classList.add("active");
    checkClassList(listMiddleContent);
  } else if (event.id === "barcaTV") {
    renderData(listBarcaTVs);
    activeElement(listMiddleContents);
    event.classList.add("active");
    checkClassList(listMiddleContent);
  } else if (event.id === "club") {
    renderData(listClubs);
    activeElement(listMiddleContents);
    event.classList.add("active");
    checkClassList(listMiddleContent);
  } else if (event.id === "barcaTeams") {
    renderDataPlus(listBarcaTeams);
    activeElement(listMiddleContents);
    event.classList.add("active");
    checkClassList(listMiddleContent);
  } else if (event.id === "nameclub") {
    renderData(listNameClub);
    activeElement(listMiddleContents);
    event.classList.add("active");
    checkClassList(listMiddleContent);
  }
}

function checkClassList(node) {
  node.classList.remove("slip__left");
  setTimeout(() => {
    node.classList.add("slip__left");
  }, 300);
}

function btnToggle(e) {
  e.children[1].classList.toggle("d_block");
  e.children[0].children[1].classList.toggle("fa-plus");
  e.children[0].children[1].classList.toggle("fa-minus");
  if (e.id === "Football") {
    renderSubData(listSubFootball, e.children[1]);
  }
  if (e.id === "Basketball") {
    renderSubData(listSubBasketball, e.children[1]);
  }
  if (e.id === "Handball") {
    renderSubData(listSubHandball, e.children[1]);
  }
  if (e.id === "Futsal") {
    renderSubData(listSubBFutsal, e.children[1]);
  }
  if (e.id === "Roller Hockey") {
    renderSubData(listSubRollerHockey, e.children[1]);
  }
  if (e.id === "Esports") {
    renderSubData(listSuEsports, e.children[1]);
  }
}
