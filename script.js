var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;



var manualnav = function(manual){



    slides.forEach((slide) =>{
        slide.classList.remove('active');

        btns.forEach((btn) => {
            btn.classList.remove('avtive');
        });
    });


    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn, i) =>{
    btn.addEventListener("click", () =>{
        manualnav(i);
        currentSlide = i;
    });
});



var repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater =() => {
            setTimeout(function(){
                [...active].forEach((activeSlide) => {
                    activeSlide.classList.remove('active');
                });


                slides[i].classList.add('active');
                btns[i].classList.add('active');
                i++;

                if(slides.length == i){
                    i = 0;
                }
                if(i >= slides.length){
                    return;
                }
                repeater();
            },4000);
        }
        repeater();

    }

repeat();

window.onload = function() {
    const statusElement = document.getElementById('status');
    
    function checkAuspiciousTime() {
        const now = new Date();
        const hours = now.getHours();

        if (hours >= 9 && hours < 21) {
            statusElement.textContent = 'Opened';
            statusElement.style.color = 'green';
        } else {
            statusElement.textContent = 'Closed';
            statusElement.style.color = 'red';
        }
    }

    checkAuspiciousTime();
};