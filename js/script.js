$(function() {
  $('a[href*="home"]:not([href="home"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == home.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + home.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
$(function() {
  $('a[href*="abt-jump"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == about.pathname.replace(/^\//,'') && location.hostname == about.hostname) {
      var target = $(about.hash);
      target = target.length ? target : $('[name=' + about.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollBy: target.offset().bottom
        }, 1000);
        return false;
      }
    }
  });
});
window.scrollBy({ 
  bottom: 100, 
  left: 0, 
  behavior: 'smooth' 
});




