var $root = $('html, body');
$('a').click(function() {
    $root.animate({
        scrollTop: $($.attr(this, 'href')).offset().top-$( window ).height()
          }, 500);
    return false;
});


window.onload = function() {
    //add scrollspy to activate menu on scroll
    $('.about').click(function(){
      $('#about-box').toggleClass('hidden');
      $('.about').toggleClass('rotated');
      console.log("about");
    })
}
