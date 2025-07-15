import "./style.css";
import { home } from "./home.js";
import {about} from "./about.js";
import  {menu} from "./menu.js";


const navBtns = document.querySelectorAll(".nav__btn")
console.log(navBtns)
console.log("Hello restaurant")
//  content();

const updateContentSection = (htmlString) =>{
     const contentEl = document.getElementById("content");
     contentEl.innerHTML = ""
     contentEl.insertAdjacentHTML("afterbegin", htmlString)
}

navBtns.forEach(btn=>{
    
    btn.addEventListener("click", ()=>{
        const targetTab = btn.dataset.tab;

        //Remove active from all tabs
        navBtns.forEach(el => el.classList.remove("active"))

        //Add current tab
        btn.classList.add("active")

        //Display content
        if(targetTab == "0") updateContentSection(home());
        if(targetTab == "1") updateContentSection(menu());
        if(targetTab == "2") updateContentSection(about());
    } )
})

//default content
updateContentSection(home())
//default tab content display
navBtns[0].classList.add("active")