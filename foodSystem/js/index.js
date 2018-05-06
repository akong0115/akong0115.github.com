$(function(){
	$('.star div').click(function(event) {
		/* Act on the event */
		console.log($(this).css('color'));
		var color=$(this).css('color');
		if(color==='rgb(208, 144, 48)'){
			$(this).css('color','#ccc');
		}else{
			$(this).css('color','rgb(208, 144, 48)');
		}
	});
	$('.like div').click(function(event) {
		/* Act on the event */
		console.log($(this).css('color'));
		var color=$(this).css('color');
		if(color==='rgb(208, 144, 48)'){
			$(this).css('color','#ccc');
		}else{
			$(this).css('color','rgb(208, 144, 48)');
		}
	});
})