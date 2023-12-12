const menuBar = document.querySelector(".hamburger");
const menuNav = document.querySelector(".navbar");
const menuLink = document.querySelector(".menu");

menuBar.addEventListener("click", () => {
    menuBar.classList.toggle("is-active");
    menuLink.classList.toggle("menu-active");
});
// AKHIR menuBar BURGER

// AWAL windowScroll
window.addEventListener("scroll", () => {
    menuNav.classList.toggle("nav-scroll-active", window.scrollY > 0);

    windowsPosition = window.scrollY > 200;
    menuBar.classList.toggle("btn-active", windowsPosition);
    menuBar.classList.remove("is-active");
    menuLink.classList.remove("menu-active");
});
// AKHIR windowScroll

// AWAL PRE LOADER
const load = document.querySelector(".loader");

function loaderActive(){
    load.classList.add("loader-active");
}

function loaderActiveTime(){
    setInterval(loaderActive, 2000);
}

window.onload = loaderActiveTime();
// AKHIR PRE LOADER