var swiper = new Swiper(".mySwiper", {
    watchSlidesProgress: true,
    slidesPerView: 4,
});

let button = document.querySelector('.menu-center');
let menu_top = document.querySelector('.menu-top');
let sidebar = document.querySelector('.sidebar');
let slides = document.querySelectorAll('.swiper-slide');
let icon1 = document.querySelector('.icon1');
let icon2 = document.querySelector('.icon2');
let left = document.querySelector('.left');
let left_header=document.querySelector('.left-header');
let menu = document.querySelector('.menu');
let circle = document.querySelector('.circle');
let logo = document.querySelector('.logo');
let moon = document.querySelector('.fa-moon');
let sun = document.querySelector('.fa-sun');
let date=document.querySelector('.date');
let time=document.querySelectorAll('.time');
let comment1=document.querySelectorAll('.comment1');
let comment2=document.querySelectorAll('.comment2');
let contentButton=document.querySelectorAll('.button');
sidebar.style.left = "-100%";
button.addEventListener("click", openmenu);
function openmenu() {

    if (sidebar.style.left == "-100%") {
        sidebar.style.left = "3%";
        button.style.backgroundColor = "#cf161c";
        menu.style.borderColor = "#000";
        circle.style.backgroundColor = "#ffffff";
        icon1.style.transform = "rotate(45deg)";
        icon1.style.borderColor = "#ffffff";
        icon1.style.padding = "0";
        icon2.style.transform = "rotate(-45deg)";
        icon2.style.borderColor = "#ffffff";
        icon2.style.padding = "0";

    }
    else {
        sidebar.style.left = "-100%";
        button.style.backgroundColor = "#ffffff";
        circle.style.backgroundColor = "#cf161c";
        icon1.style.transform = "rotate(0)";
        icon1.style.borderColor = "#000000";
        icon1.style.padding = "2px";
        icon2.style.transform = "rotate(0)";
        icon2.style.borderColor = "#000000";
        icon2.style.padding = "2px";


    }
}
let storageTheme = localStorage.getItem("theme");
if (storageTheme === "dark") {
    darkTheme();
}
else {
    lightTheme();
}



moon.addEventListener("click", () => {
    darkTheme();
    localStorage.setItem("theme", "dark");
})
sun.addEventListener("click", () => {
    lightTheme();
    localStorage.setItem("theme", " light");
})
function darkTheme() {
    
    
    moon.style.display = "none";
    sun.style.display = "block";
    slides.forEach(slide => {
        slide.style.backgroundColor = '#151d2b';
        slide.style.borderLeftColor="#253247";
    });
    left.style.backgroundColor="#151d2b";
    left_header.style.color="#fff";
    contentButton.forEach(buttons => {
        buttons.style.backgroundColor="#fff";
    })
    date.style.color="#fff";
    time.forEach(times => {
        times.style.color="#fff";
    });
    comment1.forEach( comment => {
        comment.style.color="#fff";
    });
    comment2.forEach(comment => {
        comment.style.color="#fff"
    });
    
}
function lightTheme() {
    
    moon.style.display = "block";
    sun.style.display = "none";
    slides.forEach(slide => {
        slide.style.backgroundColor = 'transparent';
        slide.style.borderLeftColor="#dedede";
    });
    left.style.backgroundColor="transparent";
    left_header.style.color="#000";
    contentButton.forEach(buttons => {
        buttons.style.backgroundColor="transparent";
    });
    date.style.color="#000000";
    time.forEach(times => {
        times.style.color="#000000";
    });
    comment1.forEach( comment => {
        comment.style.color="#000000";
    });
    comment2.forEach(comment => {
        comment.style.color="#95989a";
    });
}

