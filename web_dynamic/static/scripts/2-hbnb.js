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
			if (body.status === "OK") {
				$('#api_status').addClass('available');
			}else{
				$('#api_status').removeClass('available');
			}
		});

});
