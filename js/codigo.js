 
$(function() {
   $('[data-toggle=tooltip]').tooltip();
   $('body').scrollspy({target: '#navegacion'});
    /* Slider effects */
     var menu = $('#menu'),
         menuItem = menu.find('a');

      menuItem.on('click', function(e) {
        var href = $(this).attr('href');
        
        $(href).animatescroll({
         scrollSpeed: 500,
         easing: 'easeInQuad'
      });
       e.preventDefault();
      });   

    $('.tp-banner').revolution(
      {
         delay:5000,
         startwidth:1170,
         startheight:500,
         hideThumbs:10,
         fullWidth:"",
         fullScreen:"on",
         fullScreenOffsetContainer: ""

      });

      var $scrollTop = $('.scrollTop');

      $(window).scroll(function() {
        if($(this).scrollTop() > 300 ) {
          $scrollTop.fadeIn();
        } else {
            $scrollTop.fadeOut();
        }
      });

     $scrollTop.on('click', function() {
        $('html, body').animate({
         $scrollTop: 0
        }, 800);
        return false;
     });

});

new WOW().init();