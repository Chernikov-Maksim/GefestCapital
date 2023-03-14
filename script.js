const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

const menu = document.querySelector("#menu").cloneNode(1);

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  slidesPerView: 7,
  freeMode: true,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    992: {
      slidesPerView: 7,
    },
    768: {
      slidesPerView: 7,
    },
    576: {
      slidesPerView: 7,
    },
    320: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
