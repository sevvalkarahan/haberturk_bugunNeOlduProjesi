var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: "auto",
    freemode: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
            0: {
            slidesPerView: "auto",
            direction: "horizontal"
        },

        
        768: {
            slidesPerView: "auto",
            direction: "vertical"
        }
    }

});

let button = document.querySelector('.menu-center');
let menu_top=document.querySelector('.menu-top');
let sidebar = document.querySelector('.sidebar');
let icon1 = document.querySelector('.icon1');
let icon2 = document.querySelector('.icon2');
let left = document.querySelector('.left');
let menu = document.querySelector('.menu');
let circle = document.querySelector('.circle');
let right = document.querySelector('.right');
let main = document.querySelector('.main');
let moon=document.querySelector('.fa-moon');
let sun=document.querySelector('.fa-sun');
let slides=document.querySelectorAll('.swiper-slide');
let swiper_p=document.querySelectorAll('.swiper-p');
let swiper_time=document.querySelectorAll('.swiper-time');
let right_header=document.querySelector('.right-header');
let right_text1=document.querySelector('.right-text1');
let right_text2=document.querySelector('.right-text2');
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
let storageTheme=localStorage.getItem("theme");
if(storageTheme==="dark"){
    darkTheme();
}
else{
    lightTheme();
}


moon.addEventListener("click", () => {
    darkTheme();
    localStorage.setItem("theme", "dark");

});
sun.addEventListener("click", ()=>{
    lightTheme();
    localStorage.setItem("theme", "light")
})

function darkTheme(){
    
    slides.forEach(slide => {
        slide.style.backgroundColor="#151d2b";
        slide.style.borderBottomColor="#253247";
    });
    right.style.backgroundColor="#151d2b";
    moon.style.display="none";
    sun.style.display="block";
    
    
    swiper_p.forEach(swiper_parag => {
        swiper_parag.style.color="#fff";
    });
    swiper_time.forEach(swiper_times => {
        swiper_times.style.color="#fff";

    });
        right_header.style.color="#fff";
        right_text1.style.color="#fff";
        right_text2.style.color="#fff";
        right.style.borderLeftColor="#253247";
        

}


function lightTheme(){
    slides.forEach(slide => {
        slide.style.backgroundColor="transparent";
        slide.style.borderBottomColor="#dedede";
    });
    right.style.backgroundColor="#FFFAF0";
    moon.style.display="block";
    sun.style.display="none";
    swiper_p.forEach(swiper_parag => {
        swiper_parag.style.color="#000";
    });
    swiper_time.forEach(swiper_times => {
        swiper_times.style.color="#000";

    });
        right_header.style.color="#000";
        right_text1.style.color="#000";
        right_text2.style.color="#000";
        right.style.borderLeftColor="#dedede";

}






