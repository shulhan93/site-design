$(function() {
    $('.navbar__menu').on('click', function() {
        $('.menu-icon').toggleClass('menu-icon-active');
    })

    $('.slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        arrows:true,
        nextArrow: '<img class="prev" src="../img/icons/arrow-prev.svg">',
        prevArrow: '<img class="next" src="../img/icons/arrow-next.svg">'
      });

      $('ul.portfolio-tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.portfolio-tabs').find('div.portfolio-tabs__content').removeClass('active').eq($(this).index()).addClass('active');
      });
})