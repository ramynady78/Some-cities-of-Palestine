const slides = document.querySelectorAll(".slider img");
const prevbtn = document.querySelector(".prev-btn");
const nextbtn = document.querySelector(".next-btn");
const idSlides= document.querySelector(".img-id");
const capSlides = document.querySelectorAll(".captions p");
const galleryCon = document.querySelector(".gallery-container");
const Getnames = document.querySelectorAll(".names-city li")
galleryCon.style.gridTemplateColumns = `repeat(${slides.length} ,1fr)`;


let currentSlide = 0;

updatSliderStaous();
function goToSlid(n){
    slides[currentSlide].classList.remove("active");
    capSlides[currentSlide].classList.remove("active");
    Getnames[currentSlide].classList.remove("active");

    currentSlide = (n + slides.length) % slides.length;
    
    slides[currentSlide].classList.add("active");
    capSlides[currentSlide].classList.add("active");
    Getnames[currentSlide].classList.add("active");
    updatSliderStaous();
    updatThumbnailActavieStatus(currentSlide);
};

prevbtn.addEventListener("click" , ()=>{
    goToSlid(currentSlide - 1);
    

});
nextbtn.addEventListener("click" , ()=>{
    goToSlid(currentSlide + 1);
    
});

function updatSliderStaous(){

    prevbtn.disabled = currentSlide === 0 ;
    nextbtn.disabled = currentSlide === slides.length-1;
    idSlides.innerHTML = `City ${currentSlide + 1}`;
};

slides.forEach((img , index) => {
    const thumbnail = img.cloneNode();
    thumbnail.addEventListener("click", () => {
        goToSlid(index);
    });
    

    galleryCon.appendChild(thumbnail);
    
})

function updatThumbnailActavieStatus (index){
    galleryCon.querySelectorAll("img").forEach((img ,i) =>{
        img.classList.toggle("active" , i === index)
    })
}


for(let i= 0 ; i < Getnames.length ; i++){
    Getnames[i].addEventListener("click" , () =>{
        goToSlid(i)
    })
}


