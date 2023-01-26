$('document').ready(function() {
	let checked = {};
    $('input[type="checkbox"]').change(function() {
        if (this.checked == true ) {
            checked[$(this).attr('data-id')] = $(this).attr('data-name');
        } else {
            delete checked[$(this).attr('data-id')];
        }
        $('.amenities h4').text(Object.values(checked).join(', '));
    });

	$.get('http://127.0.0.1:5001/api/v1/status/', 
		function(body) {
			$('#api_status').toggleClass('available', body.status === "OK" );
		});

	
	$.post({
		
    		url: 'http://127.0.0.1:5001/api/v1/places_search/',
    		data: JSON.stringify({}),
    		headers: {
			'Content-Type': 'application/json'
		},
		success: function(data) {
			 $.each(data.result, function(i, place) {
				 var article = $('<article>').addClass('place');
				 var name = $('<h2>').text(place.name);
				 article.append(name);
				 $('section.places').append(article);
			 });
		},
	});
});
