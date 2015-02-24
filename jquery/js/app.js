$(document).ready(function() {

	$.getJSON('data/questions.json', function(data) { 
		var entry = data[Math.floor(Math.random()*data.length)];
		// console.log(entry);

		// output the result to html
		var output = JSON.stringify(entry.Title);
	    $('#question').html(output);
	});

	// if user clicks on 'Get Another', give them another question without going to the server
	$('#select-refresh').click(function() {
		$.getJSON('data/questions.json', function(data) { 
			var entry = data[Math.floor(Math.random()*data.length)];
			// console.log(entry);

			// output the result to html
			var output = JSON.stringify(entry.Title);
		    $('#question').html(output);
		});		
	});

	// big'ify
	$("#question").fitText();
	
	
	// On click, show bottom response.
/*
	$('#select-favorite, #select-category, #select-info').click(function(){
		$('.response-bottom').slideToggle();
	});
	$('#select-favorite').click(function(){
		$('#response-favorite').toggleClass('active');
	});
	$('#select-category').click(function(){
		$('#response-category').toggleClass('active');
	});
	$('#select-info').click(function(){
		$('#response-info').toggleClass('active');
	});
*/

});
