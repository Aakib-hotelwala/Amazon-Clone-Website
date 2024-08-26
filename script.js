const sliderImgs = document.querySelectorAll('.main-slider ul img');
const slideLeft = document.querySelector('.slide-left');
const slideRight = document.querySelector('.slide-right');

let n = 0;

function changeSlideImg() {
    for(let i = 0; i < sliderImgs.length; i++){
        sliderImgs[i].style.display = 'none';
    }
    sliderImgs[n].style.display = 'block'
}

changeSlideImg();

slideLeft.addEventListener('click', (e) => {
    if(n > 0){
        n--;
    }else {
        n = sliderImgs.length - 1;
    }
    changeSlideImg();
});

slideRight.addEventListener('click', (e) => {
    if(n < sliderImgs.length - 1){
        n++;
    }else {
        n = 0;
    }
    changeSlideImg()
});
