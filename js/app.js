$(document).ready(function() {

	$("#search-term").submit(function (event){
		event.preventDefault();
		var searchTerm = $("#query").val();
		getRequest(searchTerm);
	}); // end submit


	function getRequest(searchTerm) {

		var youtubeAPI = "https://www.googleapis.com/youtube/v3/search";

		var youtubeParams = {
				part: "snippet",
				key: "AIzaSyBeIVC4JiqUetgMGDYRqqZiVsB8ktKeg0M",
				q: searchTerm
		}

		$.getJSON(youtubeAPI, youtubeParams, function (response) {
			var videos = response.items;
			showResults(videos);
		});

	}//end getRequest

		function showResults(videos) {
			var print = "";

			$.each(videos, function(index, video){
				var title = video.snippet.title;
				var videoLink = "http://www.youtube.com/watch?v=" + video.id.videoId;
				var thumbnail = video.snippet.thumbnails.medium.url;

				//print thumbnail and link
				print += "<li><a href='" + videoLink +"' alt='"+ title +"' title='"+ title +"'><img src='" + thumbnail + "' /></a>";

				//print title
				print += "<h1><a href='" + videoLink +"' alt='"+ title +"' title='"+ title +"'>" + title + "</h1>";

			}); //end each

			$("#search-results").html(print);

		} //end showResults();





}); //end ready 