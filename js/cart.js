$(document).ready(function() {
	
    /*點選選單時，取消其他選單active class*/
	$('.content .order-menu-link>li>a').click(function(event) {
		$(this).toggleClass('active').parent().siblings().find('a').removeClass('active');
	});
	$('.like').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('far fa-heart');
	    $(this).toggleClass('fas fa-heart');
	});
	$('.btn-add-cart').click(function(event) {
		/* Act on the event */
		var count= parseInt($('.cart-count').text());
		count += 1;
		$('.cart-count').html(count);
	});

});