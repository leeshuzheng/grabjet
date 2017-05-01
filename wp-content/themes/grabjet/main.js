$(document).ready(function() {
	console.log("ready!");

	// nav pages ajax call
	var resource_url = location.origin + "/grabjet/wp-json/wp/v2";
	var dont = "#";

	$.ajax((resource_url + "/pages"), {
		success: function(data) {
			for (i = 1; i < data.length; i++) {
				var liHolder = "<li><a href=\"" + dont + "\">" + data[i].title.rendered + "</a></li>";
				$('#header-nav').append(liHolder);
				$('#footer-nav').append(liHolder);
			};

		},
		error: function() {
			console.log("error has occured");
		}
	});

	var fromInput = document.getElementById("from-input");
	var toInput = document.getElementById("to-input");
	var awesomplete = new Awesomplete(fromInput, {
		minChars: 1, 
		autoFirst: true,
		maxItems: 10
	});

	var awesomplete2 = new Awesomplete(toInput, {
		minChars: 1, 
		autoFirst: true,
		maxItems: 10
	});


	var fromList = [];
	var toList = [];
	

	$.ajax(("https://developers.onemap.sg/commonapi/search?searchVal=mall&returnGeom=N&getAddrDetails=N"), {
		success: function(data) {
			
			for (i = 0; i < data.results.length; i++) {
				fromList.push(data.results[i].SEARCHVAL);
				toList.push(data.results[i].SEARCHVAL);
				awesomplete.list = fromList;
				awesomplete2.list = toList;
			}
		},
		error: function() {
			console.log("error has occured");
		}
	});

	// add-on services for dropdown
	$.ajax((resource_url + "/posts"), {
		success: function(data) {
			for (i = 0; i < data.length; i++) {
				var optionHolder = "<option>" + data[i].content.rendered + "</option>";
				$('#add-on-options').append(optionHolder);
			}
		},
		error: function() {
			console.log("error has occured");
		}
	});

	$('#datetimepicker4').datetimepicker({
		format: 'D MMMM YYYY'
	});


	$('#request-button').click(function() {
		var text = "Booking is confirmed from <span class=\"greenbold\">" + $('#from-input').val() + "</span> to <span class=\"greenbold\">" + $('#to-input').val() + "</span> on <span class=\"bold\">" + $('#datetimepicker4').val() + "</span>.";
		$('#confirmation-text').html(text);

		if ($('#add-on-options').val() == "No Add-Ons") {
			$('#add-on-text').html("You have no add-on services selected.");
		} else {
			var text = "You have selected the <span class=\"greenbold\">" + $('#add-on-options').val() + "</span> add-on."
			$('#add-on-text').html(text);
		}
	});

	$('#form').submit(function() {
		return false
	});

	$('#request-button').click(function (event) {
		if ($('#from-input').val().length == 0 || $('#to-input').val().length == 0 || $('#datetimepicker4').val().length == 0) {
			event.stopPropagation();	
		}
	});

		$('#request-button-mobile').click(function() {
		var text = "Booking is confirmed from <span class=\"greenbold\">" + $('#from-input').val() + "</span> to <span class=\"greenbold\">" + $('#to-input').val() + "</span> on <span class=\"bold\">" + $('#datetimepicker4').val() + "</span>.";
		$('#confirmation-text').html(text);

		if ($('#add-on-options').val() == "No Add-Ons") {
			$('#add-on-text').html("You have no add-on services selected.");
		} else {
			var text = "You have selected the <span class=\"greenbold\">" + $('#add-on-options').val() + "</span> add-on."
			$('#add-on-text').html(text);
		}
	});

			$('#request-button-mobile').click(function (event) {
		if ($('#from-input').val().length == 0 || $('#to-input').val().length == 0 || $('#datetimepicker4').val().length == 0) {
			event.stopPropagation();	
		}
	});

});

