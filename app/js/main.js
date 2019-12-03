$(function() {
    $('.navbar__menu').on('click', function() {
        $('.menu-icon').toggleClass('menu-icon-active');
    })

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
    slider('.slider')
    slider('.slider2')
    slider('.slider3')


      $('ul.portfolio-tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.portfolio-tabs').find('div.portfolio-tabs__content').removeClass('active').eq($(this).index()).addClass('active');

      });
})