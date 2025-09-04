const slider = document.querySelector(".slider");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot")

let currentSlideIndex = 0;

const goToSlide = (index) =>{
//    slider.style.transform = `translateX${index}`
slider.style.transform = `translateX(-${index * slides[0].offsetWidth}px)`
// let x = slides[0].offsetWidth;
console.log(index, slides[0].offsetWidth)
console.log(index * slides[0].offsetWidth)
// console.log(x)
dots.forEach((dot, i)=>{
    if (i == index) {
        dot.classList.add("active")
    } else {
        dot.classList.remove("active")
    }
})

currentSlideIndex = index
}


dots.forEach(dot =>{
    dot.addEventListener("click", (e)=>{
        const ind = Number(e.target.value);
        goToSlide(ind)
    })
})

nextBtn.addEventListener("click", ()=>{
    const nextBtnIndex = (currentSlideIndex + 1) % slides.length;
    goToSlide(nextBtnIndex)
})

prevBtn.addEventListener("click", ()=>{
    const prevBtnIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    goToSlide(prevBtnIndex)
})
goToSlide(0)