const resposiveNav = document.querySelector('.responsive-nav')

const openMenu = () => {
    resposiveNav.classList.toggle('open-nav')
}

$('.hero-image').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});

$('.artframe').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

if (window.matchMedia('(max-width: 800px)').matches) {
  createUniversalMasonry()
 
} 

window.addEventListener('resize' , function(){
  if (window.matchMedia('(max-width: 800px)').matches) {
    createUniversalMasonry()
  } 
})

function createUniversalMasonry(){
  let createMasonry = new Masonryan({
    container : '.clock-gallery',
    items : '.clock-gallery .clock-gallery-item',
    dividedBy: 4
  })
}

let aesthethicMasonry = new Masonryan({
    container : '.aesthetic-gallery',
    items : '.aesthetic-item',
    dividedBy: 2
  })

let styleMattersMasonry = new Masonryan({
    container : '.style-matters-gallery',
    items : '.style-matters-item',
    dividedBy: 2
  })

  const focus = (el) => {
    el.parentElement.classList.add('form-focus')
  }

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}