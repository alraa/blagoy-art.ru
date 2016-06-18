$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	};
	$('body').removeClass('loaded'); 
	if($('#main-slider').length){
	  $('#main-slider').flexslider({
		animation: "slide",
		slideshow: true,
		useCSS : false
	  });
	}
});
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
$(function(){
	
	/* placeholder */
 	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', ''); return false;});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder); 
 			return false;
 		});
 	});
	/* placeholder */
 	
	/* mobile nav */
	$('.button-nav').click(function(){
		$(this).toggleClass('active'), 
		$('.main-nav-list').slideToggle(); 
		return false;
	});
	/* mobile nav */
	
	/* tabs */
 	$('.tabs li a').click(function(){
  		$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide-tab');
  		$(this).parent().siblings().removeClass('active');
  		var id = $(this).attr('href');
  		$(id).removeClass('hide-tab');
  		$(this).parent().addClass('active');   		
  		return false;
  	});
	
	$('.tabs2 li a').click(function(){
  		$(this).parents('.tab-wrap2').find('.tab-cont2').addClass('hide-tab');
  		$(this).parent().siblings().removeClass('active');
  		var id = $(this).attr('href');
  		$(id).removeClass('hide-tab');
  		$(this).parent().addClass('active');   		
  		return false;
  	}); 
	/* tabs */
	
	/* preview img */
 	$('.preview-js li a').click(function(){
		var img_src = $(this).attr('href');
  		$(this).parents('.js-cont').find('.img-big-js').attr('src',img_src);
  		$(this).parent().siblings().removeClass('active');  		
  		$(this).parent().addClass('active');   		
  		return false;
  	});	
	/* preview img */
	
	/* product list */
 	
 	$('.minus-js').click(function () {
         var $input = $(this).parents('.number-product').find('input');
         var count = parseInt($input.val()) - 1;
         count = count < 1 ? 1 : count;
         $input.val(count);
         $input.change();
         return false;
     });
     $('.plus-js').click(function () {
         var $input = $(this).parents('.number-product').find('input');
         var count = parseInt($input.val()) + 1;
         count = count > ($input.attr("maxlength")) ? ($input.attr("maxlength")) : count;
         $input.val(count);
         $input.change();
         return false;
     });
 
	/* product list */
	
	/* mobile header */
	$('.link-js').click(function(){
		$(this).parents('.mobile-nav-js').find('.tab-nav').addClass('hide-tab');
		$(this).parent().siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide-tab');
		$(this).parent().addClass('active'); 
		$('.mobile-block-open').addClass('visible-cont'); 
		$('html').addClass('opened-nav');
		return false;
	}); 
	$('.close-mobile-block').click(function(){		
		$('.list-mobile-nav__item').removeClass('active');
		$('.mobile-block-open').removeClass('visible-cont'); 
		$('html').removeClass('opened-nav');
		return false;
	}); 
	$('.cont-mask').click(function(){		
		$('.list-mobile-nav__item').removeClass('active');
		$('.mobile-block-open').removeClass('visible-cont'); 
		$('html').removeClass('opened-nav');
		return false;
	}); 
	/* mobile header */
	

});

var handler2 = function(){
	
	/* footer position */
	var height_footer = $('footer').height();	
	$('.content').css({'padding-bottom':height_footer+40});
	/* footer position */
	
	/* product list */
	$('.list-product__item').each(function(){
		var height_cont = $(this).find('.list-product__visible-cont').height();
  		$(this).find('.list-product__hidden-cont').css({'padding-top':height_cont+10});  		
  	});	
	/* product list */
	
	
	var ww = viewport().width;
	
	if (ww <= 991) {
		
	}
	
}
$(window).bind('load', handler2);
$(window).bind('resize', handler2);



