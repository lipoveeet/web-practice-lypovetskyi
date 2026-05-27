const burger = document.querySelector(".burger");

const mobileMenu = document.querySelector(".mobile-menu");

const mobileClose = document.querySelector(".mobile-menu-close");

burger.addEventListener("click", () => {

    mobileMenu.classList.add("active");

});

mobileClose.addEventListener("click", () => {

    mobileMenu.classList.remove("active");

});