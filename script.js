$('.owl-carousel').owlCarousel({
    stagePadding: 2,
    loop:true,
   
    margin:2,
    items:5,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        700: {
            items:1,
         
        },
        800: {
            items:2
        },
        1000:{
            items:3
        }
    }
})




