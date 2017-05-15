var jQuery = jQuery.noConflict();



jQuery(document).ready(function(){
	jQuery('.user').mouseover(function(){
	jQuery('.ui-login-status').css('display','block');
	});

	jQuery('.user').mouseout(function(){	
		jQuery('.ui-login-status').css('display','none');
	});
	//折叠
	jQuery('.btn-fold').on('click',function(e){
		jQuery(e.target).parents('.foldableBox').toggleClass('fold');
	});

});