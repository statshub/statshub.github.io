(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    //on get started click
    $('#download-button').click(function() {
       //optionally remove the 500 (which is time in milliseconds) of the
       //scrolling animation to remove the animation and make it instant
       $('html, body').animate({
            scrollTop: $("#quick_intro").offset().top
        }, 1000);
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
