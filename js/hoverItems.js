let opacityValueOnHover = 0.4;

$(document).ready(function() {
    $('#hoverItem1').mouseenter(function() {
        $('#hoverItem2,#hoverItem3').css('opacity', opacityValueOnHover);
      })
      .mouseleave(function() {
        $('#hoverItem2,#hoverItem3').css('opacity', '1');
    });
    $('#hoverItem2').mouseenter(function() {
        $('#hoverItem1,#hoverItem3').css('opacity', opacityValueOnHover);
      })
      .mouseleave(function() {
        $('#hoverItem1,#hoverItem3').css('opacity', '1');
    });
    $('#hoverItem3').mouseenter(function() {
        $('#hoverItem2,#hoverItem1').css('opacity', opacityValueOnHover);
      })
      .mouseleave(function() {
        $('#hoverItem2,#hoverItem1').css('opacity', '1');
    });
    $('.marketing-sector-open').mouseenter(function() {
        $('.marketing-sector').css('display', 'fixed');
      })
      .mouseleave(function() {
        $('.marketing-sector').css('display', 'none');
    });
});