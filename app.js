// document ready event
$(document).ready(function() {
	$('.query').on("keypress", function(event) {
		if (event.which == 13) {
			var key = "6MXMy6ZYATEAV1L1DDsONAb002dfnMh2";
			var query = this.value;
			var animal = this.id;
			var url = "https://api.giphy.com/v1/gifs/random?tag="
						+ query
						+ "&api_key="
						+ key;
			var animalUrl = "https://api.giphy.com/v1/gifs/random?tag="
						+ animal
						+ "&api_key="
						+ key;

			$.getJSON(url, function(json) {
				$.getJSON(animalUrl, function(animalJson) {
						console.log(json);
					//document.getElementById('gifs').innerHTML = "";
						if (json.data.images.downsized.url) {

							const imgElem = $('<img>')
								.attr('src', json.data.images.downsized.url);
							const imgContainer = $('<div>')
								.addClass('gif');
							imgContainer.append(imgElem);

							 $('#gifs').append(imgContainer);
						}
					});
			});
		}
	});
});
