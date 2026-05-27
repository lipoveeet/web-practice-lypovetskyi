const menuOpen = document.querySelector(".menu-icon-open");
const menuClose = document.querySelector(".menu-icon-close");
const menu = document.querySelector(".main-menu");

menuOpen.addEventListener("click", () => {

    menu.classList.add("active");

    menuOpen.style.display = "none";
    menuClose.style.display = "block";

});

menuClose.addEventListener("click", () => {

    menu.classList.remove("active");

    menuOpen.style.display = "block";
    menuClose.style.display = "none";

});