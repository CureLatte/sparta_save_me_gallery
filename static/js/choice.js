$(document).ready(function () {
    initial_underline();
    document.getElementById('style_'+ 0).click();
});

var swiper = new Swiper(".preview_box", {
    navigation: {
        // nextEl: ".swiper-button-next",
        // prevEl: ".swiper-button-prev",
    },
    allowTouchMove : false,
});


function move_model_slide(id){
    swiper.slideTo(id.split('_')[1])
}


let under_line = document.getElementById('under_line_preview');
let Menus = document.querySelectorAll('div.select_style_name ')

Menus.forEach((menu)=>
    menu.addEventListener('click', (e) => draw_nuder_line(e)));

function draw_nuder_line(e){
    under_line.style.left = e.currentTarget.offsetLeft + "px";
    under_line.style.width = e.currentTarget.offsetWidth + "px";
    under_line.style.top = 10 + e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}

function next_category(){
    let current_index = swiper.realIndex+1
    let target = document.getElementById('style_'+ current_index )
    console.log(target)
    target.click();
}

function prev_category(){
    let current_index = swiper.realIndex -1
    let target = document.getElementById('style_'+ current_index)
    move_model_slide('style_'+ current_index)
    target.click();
}