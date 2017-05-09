var jQuery = jQuery.noConflict();

jQuery('.user').mouseover(function(){
	jQuery('.ui-login-status').css('display','block');
});

jQuery('.user').mouseout(function(){	
		jQuery('.ui-login-status').css('display','none');
});