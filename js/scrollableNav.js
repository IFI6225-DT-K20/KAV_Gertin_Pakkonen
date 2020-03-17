let lastScrollTop = 0;
$(function () {
  $(document).scroll(function () {
    let $nav = $(".nav");
    let st = $(this).scrollTop();
    console.log(st);
    if (st > lastScrollTop){
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      $nav.css('border-bottom', '1px solid transparent')
    } else {
      $nav.removeClass('scrolled', $(this).scrollTop() > $nav.height());
      if(st < 10){
        $nav.css({'background-color': '#ffe01b', 'border-bottom': '1px solid transparent'});
      } else {
        $nav.css({'background-color': '#FFF', 'border-bottom': '1px solid #f6f6f4'});
      }
    }
    lastScrollTop = st;
  });
});