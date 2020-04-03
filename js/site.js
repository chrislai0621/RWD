$(document).ready(function() {
	 $('.showmenu').on('click',  function(e){
      e.preventDefault();
      $('body').toggleClass('menu-show');
  });
	/*
	$('.banner .menu>li>a').click(function(event) {
		event.preventDefault();
		$(this).toggleClass('active').parent().siblings().find('a').removeClass('active');
		$(this).parent().find('.course').slideToggle();//顯示子選單
		$(this).parent().siblings().find('.course').slideUp();//隱藏其他選單的子選單
	});


   lightbox.option({
	  'fadeDuration':100,
      'wrapAround': true
    })
*/
});