
// Declaring method that CLEANS TIME

var cleanSleepTime = function (hours, mins, ampm) {
	var finalAMPM


// Convert negative minutes
	if (mins < 0) {
		mins += 60;
		hours -= 1;
	}
	

// Convert AM & PM correctly
	if (ampm === "PM") {
		if (hours > 0) {
			finalAMPM = "PM";
		} else {
			hours += 12
			finalAMPM = "AM"	
		}
	} else {
		if (hours < 0) {
			hours += 12
			finalAMPM = "PM"
		} else {
			finalAMPM = "AM"
		}
		if ( hours === 0){
			hours += 12
			finalAMPM === "AM"
		}
	}
// Convert Minutes to string for 00 and Hours to string for consistency 
	
	if (mins === 0) {
		mins = "00"
	} else {
		mins = "" + mins;
	}
	
	hours = "" + hours;
	
// Converts :5 minutes to :05 minutes

	if (mins === "5") {
		mins = "05";
	}	

	
	return [hours, mins, finalAMPM];
};

// Creates string for DOM

var addSleepTimes = function (time, id) {
	var timeString = "" + time[0] + ":" + time[1] + " " + time[2];
	console.log(timeString, id)
	$(id).text(timeString);
};



// Calculator part (Left)

var calculateSleepTimesLeft = function () {
	var hours, mins, ampm, results
	//Grabs HTML selection
	hours = Number($('#leftHour').val());
	mins = Number($('#leftMinute').val());
	ampm = Number($('#leftAMPM').val());
	results = []
	//Calculate values and clean arrays
	results[0] = cleanSleepTime(hours - 6, mins, ampm);
	results[1] = cleanSleepTime(hours - 7, mins - 30, ampm);
	results[2] = cleanSleepTime(hours - 9, mins, ampm);
	
	//Adding sleep times to DOM
	for (var i = 0; i < results.length; i++) {
		addSleepTimes(results[i], "#left-z-" + i)
		
	}
};

// Calculator part (Right)

var calculateSleepTimesRight = function () {
	var hours, mins, ampm, results
	//Grabs HTML selection
	hours = Number($('#rightHour').val());
	mins = Number($('#rightMinute').val());
	ampm = Number($('#rightAMPM').val());
	results = []
	//Calculate values and clean arrays
	results[0] = cleanSleepTime(hours - 6, mins, ampm);
	results[1] = cleanSleepTime(hours - 4, mins - 30, ampm);
	results[2] = cleanSleepTime(hours - 3, mins, ampm);
	//Adding sleep times to DOM
	for (var i = 0; i < results.length; i++) {
		addSleepTimes(results[i], "#right-z-" + i)
	
	}
};



$(document).ready(function() {

// Beginning Footer Animations

	$( "#footerAbout" ).delay( 2000 ).show( 500 );
    $( "#footerOpmet" ).delay( 2000 ).hide( 500 );
    
// Beginning Wake Time & Sleep Time Animations    
    	
	$( "#left" ).show( 1500 );
	$( "#right" ).show( 1500 );
	
// Footer Color Change on Footer or Panel Hover	
	
	$(".panel").mouseenter(function(){
		$("#footerAbout").css("background-color","#772780");
	
	});
	
	$(".panel").mouseleave(function(){
		$("#footerAbout").css("background-color","");
	});
	
// Panel Toggle on Footer or Panel Hover 
	
	$(".panel").hover(function(){
		$("#panel").slideToggle();
	});

// Hover on link changes color
	
	$("a").mouseenter(function(){
		$("a").css("color","#270097");
	
	});
	
	$("a").mouseleave(function(){
		$("a").css("color","");
	});


// Z Show

	$("#rightCalc").click(function(){
	  $("zzzRT").fadeIn( 500 );
	   $("zzRT").delay( 1000 ).fadeIn( 500 );
	    $("zRT").delay( 2000 ).fadeIn( 500 );
	    calculateSleepTimesRight()
	});
	
	$("#leftCalc").click(function(){
	  $("zzzLT").fadeIn( 500 );
	   $("zzLT").delay( 1000 ).fadeIn( 500 );
	    $("zLT").delay( 2000 ).fadeIn( 500 );
	    calculateSleepTimesLeft();
	});


	

});
































