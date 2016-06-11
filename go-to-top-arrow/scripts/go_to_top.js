var $arrow = $('.go-to-top');
$arrow.hide();//hide the arrow first

var bannerTopPos = $('.banner').offset().top;
//click to go back to top
$arrow.click(function(){
	$('body, html').animate(
		{scrollTop:$('body').offset().top}
	,500);
});
//fade your arrow when at top
$(window).scroll(function(){
	if($(window).scrollTop() > bannerTopPos){
			$arrow.fadeIn();
	}else{
		$arrow.fadeOut();
	}
});