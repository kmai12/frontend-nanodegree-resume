var projects = {
    "projects": [
	{
	    "title": "stub",
	    "dates": "stub",
	    "description": "stub",
	    "images": "stub",
	},
	{
	    "title": "stub2",
	    "dates": "stub2",
	    "description": "stub2",
	    "images": "stub2",
	}
    ]
}


function displayWork(){
    for (job in work.jobs){
	// create new div for experience
	$("#workExperience").append(HTMLworkStart);
	// concat employer and title
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(
	    formattedEmployerTitle);    
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedLocation);
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);
	
	//	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	//	$(".work-entry:last").append(formattedDescription);
	
	var description = work.jobs[job].description;
	var sentences = description.split(". ");
	$(".work-entry:last").append("<br>");
	for(var sentence; sentence < sentences.length - 1; ++sentence){
	    sentences[sentence] = sentences[sentence] + ".";
	}
	
	for(sentence in sentences){
	    var formattedDescription = HTMLbullet.replace("%data%", sentences[sentence]);
	    
	    $(".work-entry:last").append(formattedDescription);
	}
    }
    

    //<ol>
    //<li>Coffee</li>
    //<li>Tea</li>
    //</ol>
    
    
}

displayWork();

projects.display = function(){
    for( project in projects.projects) {
	$("#projects").append(HTMLprojectStart);
	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	$(".project-entry:last").append(formattedTitle);
	var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	$(".project-entry:last").append(formattedDates);
	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	$(".project-entry:last").append(formattedDescription);

	if(projects.projects[project].images.length > 0){
	    for(image in projects.projects[project].image){
		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
		$(".project-entry:last").append(formattedImage);
	    }
	}
    }
}

projects.display();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});

$("#mapDiv").append(googleMap);
//$("#header").append(work.jobs[0].position);
//$("#main").append(education.schools.name);
