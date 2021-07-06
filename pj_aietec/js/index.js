$(".owl-carousel").owlCarousel({
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