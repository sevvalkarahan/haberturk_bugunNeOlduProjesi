var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
let logo = document.querySelector('.logo');
let left = document.querySelector('.left');
let moon = document.querySelector('.fa-moon');
let sun = document.querySelector('.fa-sun');
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
    localStorage.setItem("theme", "light");
});
function darkTheme(){
    moon.style.display = "none";
    sun.style.display = "block";
    logo.style.backgroundColor = "#151d2b";
    left.style.backgroundImage = "linear-gradient(to right, #151d2b, #373737), url(../image/11.png)";
}

function lightTheme(){
    moon.style.display="block";
    sun.style.display="none";
    logo.style.backgroundColor="#cf161c";
    left.style.backgroundImage="linear-gradient(to right, #cf161c, #cf161cdc), url(../image/11.png)";
}