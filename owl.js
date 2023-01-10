$('.owl-two').owlCarousel({
    stagePadding: 2,
    loop:true,
   
    margin:2,
    items:5,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        700: {
            items:2,
         
        },
        800: {
            items:3
        },
        1000:{
            items:5
        }
    }
})