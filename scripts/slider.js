document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    let nextBtn = document.getElementById('nextBtn');
    let prevBtn = document.getElementById('prevBtn');
    let sliderWrapper = document.getElementById('sliderWrapper')
    let index =0;
    let dots = []
    for (let i = 1; i < 6; i++){
        dots[i-1] = document.getElementById('dot'+i);
    }

    dots[0].style.opacity = '100%';
    nextBtn.addEventListener("click", function () {
        if (index > 3){
            index = 0;
        }
        else {index++}
        sliderWrapper.style.left = '-'+ index*376+'px';
        for (let i = 0; i < dots.length; i++){
            if (index == i){
                dots[i].style.opacity = '100%';
            } else{
                dots[i].style.opacity = '50%';
            }
        }
    })
    prevBtn.addEventListener("click", function () {
        if (index < 1){
            index = 4;
        }
        else {index--}
        sliderWrapper.style.left = '-'+ index*376+'px';
        for (let i = 0; i < dots.length; i++){
            if (index == i){
                dots[i].style.opacity = '100%';
            } else{
                dots[i].style.opacity = '50%';
            }
        }
    })
})