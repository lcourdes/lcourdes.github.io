class Carousel {
    constructor(div_id) {
        this.div_name = div_id
        this.div_node = document.querySelector('#' + div_id);
        this.imgs = NodeList;
        this.dots = NodeList;
        this.currentImg = 0;

        this.get_images();
        this.get_dots();
    }

    get_images() {
        this.imgs = this.div_node.querySelectorAll('.slider img');
    }

    get_dots() {
        this.dots = this.div_node.querySelectorAll('.dot');
    }
}

var all_carousel = []
function create_list_of_carousel(){
    let carousel_div = document.querySelectorAll('.carousel')
    for (var i = 0; i < carousel_div.length; i++){
        all_carousel.push(new Carousel(carousel_div[i].id))
    }
    
}

create_list_of_carousel();

var currentImg = 0; // index of the first image 
const interval = 5000; // duration(speed) of the slide
var timer = setInterval(rotateSlide, interval);

function rotateSlide(){
    for (var i=0; i < all_carousel.length; i++){
        all_carousel[i].currentImg = (all_carousel[i].currentImg + 1) % all_carousel[i].imgs.length;
        changeSlide(all_carousel[i].currentImg, all_carousel[i].div_name)
    }
}

function changeSlide(n, div_id) {
    for (var i=0; i < all_carousel.length; i++){
        if (div_id == all_carousel[i].div_name) {
            var carousel = all_carousel[i]
        }
    }

    for (var i = 0; i < carousel.imgs.length; i++) { // reset
      carousel.imgs[i].style.opacity = 0;
      carousel.dots[i].className = carousel.dots[i].className.replace(' active', '');
    }

    carousel.currentImg = n

    carousel.imgs[carousel.currentImg].style.opacity = 1;
    carousel.dots[carousel.currentImg].className += ' active';

    console.log(carousel.currentImg)
    
    clearInterval(timer);
    timer = setInterval(rotateSlide, interval);
  }