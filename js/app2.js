$(document).ready(function () { 


		$("#search-term").submit(function (event) {
		event.preventDefault();
		var searchTerm = $("#query").val();
		getRequest(searchTerm);
	});


	// This function is to get the data from youtube API and display it on the page
	function getRequest(searchTerm) {
		var params = {
			part: "snippet",
			key: "AIzaSyBeIVC4JiqUetgMGDYRqqZiVsB8ktKeg0M",
			q: searchTerm
		}

		url = "https://www.googleapis.com/youtube/v3/search"

		$.getJSON(url, params, function (data) {
			showResults(data.items)
		});

	}

	function showResults(items) {
		var html = "";

		$.each (items, function (index, item) {

			html += "<p>" + item.snippet.title +
			"</p><img src='" +  item.snippet.thumbnails.default.url + "'/>" ;
		});



		$("#search-results").html(html);
	}


}); //end doc ready