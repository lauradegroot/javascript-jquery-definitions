$(function(){
	$('p.open-terms').click(function(){
		$('.terms').toggle(400);
	})
	$('.terms li').click(function(){
		$('dt').removeClass('highlight');
		var termClass = $(this).attr("class");
		$('dt#'+termClass).addClass('highlight');
	});

});
