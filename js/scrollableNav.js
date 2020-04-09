let lastScrollTop = 0;

$(function () {
  $(document).scroll(function () {
    let $nav = $(".nav");
    let st = $(this).scrollTop();
    if (st > lastScrollTop){
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      $nav.css({'border-bottom': '1px solid transparent', 'padding-top': '0rem'});
    } else {
      $nav.removeClass('scrolled', $(this).scrollTop() > $nav.height());
      if(st < 10){
        $nav.css({'background-color': '#ffe01b', 'border-bottom': '1px solid transparent', 'padding-top': '1.5rem'});
      } else {
        $nav.css({'background-color': '#FFF', 'border-bottom': '1px solid #f6f6f4', 'padding-top': '0rem'});
      }
    }
    lastScrollTop = st;
  });
});