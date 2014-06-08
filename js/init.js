function translate() {
  lang = navigator.language.substr(0, 2);
  if (lang == 'pt' || lang == 'es') {
    pass;
  }
  else {
    html10n.localize('en');
  }
}

$(function(){
	$(".thumbnails a").attr('rel', 'gallery').fancybox();

	$("#nav-list li, #scroll_up").click(function(e) {
		e.preventDefault();
		 $('html, body').animate({
				scrollTop: $($(this).children("a").attr("href")).offset().top
		 },1500);
	 });
 translate();
 });
