$(function(){

/* слик слайдер бренды */
 $('.partners__ineer-slider').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class=".slick-btn slick-prev"></button>',
  nextArrow: '<button type="button" class=".slick-btn slick-next"></button>',
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        arrows: false,
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 996,
      settings: {
        arrows: false,
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 650,
      settings: {
        arrows: false,
        slidesToShow: 1,
      }
    }
  ]
  
});
/* слик слайдер отзывы */
 $('.responses__ineer-video').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class=".slick-btn slick-prev"></button>',
  nextArrow: '<button type="button" class=".slick-btn slick-next"></button>',
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 996,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
  
});





/* катаеться меню */ 
 var lastScrollTop = 0;
    navbar = document.getElementById("navbar");
    window.addEventListener("scroll", function(){
      var scrollTop = window.pageYOffset || document
       .documentElement.scrollTop;
       if (scrollTop > lastScrollTop){
         navbar.style.top="-50px";
       } else {
         navbar.style.top="0";
         }
         lastScrollTop = scrollTop;
    })

/* бургер меню*/
 $(document).ready(function(){
  $('.nav__menu-btn').click(function(){
    $('.nav__menu-btn').toggleClass('active')
    $('.nav__menu').toggleClass('active')    
  });
});

/* актив отзывы */ 
 $(document).on('click','ul li', function(){
  $(this).addClass('active').siblings().removeClass('active')
});
/* актив кнопки тарифы и показываеются поля тарифы и сравнить тарифы */ 
 $(document).on('click','.tariff__btn-option', function(){
  $(this).addClass('active').siblings().removeClass('active')
  $('.tariff__ineer-option').addClass('active').siblings().removeClass('active')
});
 $(document).on('click','.tariff__btn-block', function(){
  $(this).addClass('active').siblings().removeClass('active')
  $('.tariff-block').addClass('active').siblings().removeClass('active')
});



});

