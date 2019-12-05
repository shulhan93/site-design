$(function() {
    $('.navbar__menu').on('click', function() {
        $('.menu-icon').toggleClass('menu-icon-active');
    })




      function tabs(name) {
        $('ul.' + name +'__caption').on('click', 'li:not(.active)', function() {
          $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.' + name).find('div.' + name +'__content').removeClass('active').eq($(this).index()).addClass('active animated slow fadeIn');
        });
      }
  
      tabs('tabs');
      tabs('tabs2')

      function slider(name) {
        $(name).slick({
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 3,
          arrows:true,
          nextArrow: '<img class="prev" src="../img/icons/arrow-prev.svg">',
          prevArrow: '<img class="next" src="../img/icons/arrow-next.svg">'
        });
      }
      slider('slider')
      slider('slider2')
      slider('slider3')

      $('.popup-youtube').magnificPopup({
        disableOn: 900,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
    
        fixedContentPos: false
      });


})