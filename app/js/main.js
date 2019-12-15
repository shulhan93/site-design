$(function() {
    $('.navbar__menu').on('click', function() {
        $('.menu-icon').toggleClass('menu-icon-active');
    })

      function tabs(name) {
        $('ul.' + name +'__caption').on('click', 'li:not(.active)', function() {
          console.log($(this))

          $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.' + name).find('div.' + name +'__content').removeClass('active').eq($(this).index()).addClass('active animated slow fadeIn');
        });
      }
  
      tabs('tabs');
      tabs('tabs2')

      function slider(name) {
        if (name == '.slider4') {
          $(name).slick({
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            centerMode: true,
            centerPadding: '200px',
            variableWidth: true,
            arrows: false,
            dots: true,
          });
        } else {
          $(name).slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 3,
            arrows:true,
            nextArrow: '<img class="prev" src="../img/icons/arrow-prev.svg">',
            prevArrow: '<img class="next" src="../img/icons/arrow-next.svg">'
          });
        }
    
      }
      slider('.slider')
      slider('.slider2')
      slider('.slider3')
      slider('.slider4')

      $('.popup-youtube').magnificPopup({
        disableOn: 900,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
    
        fixedContentPos: false
      });


})