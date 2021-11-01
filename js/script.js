// owl carousel
$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplaytimeout:1000,
    // stagePadding:50,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})






// let menuBtn = document.querySelector('.menu-btn');
// let menu = document.querySelector('.menu');
// let menuStatus = false;

// // menu should be closed by default*
// menu.style.marginLeft = '-300px';


// // menu slide in and out*
// function menuToggle(e) {
//     e.preventDefault();
//     if (menuStatus === false) {
//         menu.style.marginLeft = '0px';
//         menuStatus = true;
//     }

//     else if (menuStatus === true) {
//         menu.style.marginLeft = '-300px';
//         menuStatus = false;
//     }
// }
// // event handler*
// menuBtn.onclick = menuToggle;


