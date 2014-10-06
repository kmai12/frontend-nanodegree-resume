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
