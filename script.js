$(function(){
	$('.terms li').click(function(){
		$('dt').removeClass('highlight');
		var termClass = $(this).attr("class");
		$('dt#'+termClass).addClass('highlight');
	});
});
