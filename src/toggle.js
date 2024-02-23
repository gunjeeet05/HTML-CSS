

const third=document.querySelector(".parent-nav");
const btn=document.querySelector(".menu-nav-btn");
btn.addEventListener('click', ()=>{
    third.classList.toggle("open-nav");
})