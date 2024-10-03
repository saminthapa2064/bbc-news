$(".owl-carousel").owlCarousel({
    items: 3,
    margin: 30,
    loop: true,
  nav: true,

  stagePadding: 10,
  autoplayTimeout: 3000,
autoplayHoverPause: true,
  responsive:{
    0:{
      items: 1,
    },
    768:{
    items: 2,
  },
  991:{
    items: 3,
  },
  }
  });