$(".owl-carousel.banner-owl").owlCarousel({
    items: 1,
    dots: true,
    nav: true,
    margin: 0,
    loop: true,
    center: true,
    autoplay: true,
    smartSpeed: 300,
    autoplayHoverPause: true,
    navText: [
      "<i class='banner-icon'><</i>",
      "<i class='banner-icon'>></i>",
    ],
    responsive: {
      992: {
        items: 1,
      },
    },
  });

  $('.owl-carousel.prd-owl').owlCarousel({
    center: true,
    loop: true,
    margin: 10,
    items: 2,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
      "<i class='banner-icon'><</i>",
      "<i class='banner-icon'>></i>",
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})