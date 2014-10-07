var projects = {
    "projects": [
	{
	    "title": "UCSB Curriculum Scraper",
	    "dates": "Winter 2014",
	    "description": "Updated Java legacy code to allow search queries through the scraper using the Curriculum Search website. Used GitHub to discuss, fix, and notify others of issues and features of the program. Parsed HTML and scraped course information from the website to use in the program.",
	    "images": "",
	},
	{
	    "title": "Split It!",
	    "dates": "Spring 2014",
	    "description": "Created a CRUD web app for evenly splitting, sharing, and displaying bills with other users using Java, JSF framework, HTML, and CSS. Implemented a user database with features such as: login/logout, registration, and add friend using SQLite and JDBC. Automated the build process by creating a build file using XML and Apache Ant. Hosted the web app on localhost using Apache Tomcat.",
	    "images": "",
	},
	{
	    "title": "Snakes & Ladders Solver",
	    "dates": "Spring 2014",
	    "description": "Implemented Dijkstra's algorithm using C++ to output both the number of steps and the shortest path possible to win Snakes & Ladders given the size of the board and the number and location of obstacles.",
	    "images": "",
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
//	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
//	$(".project-entry:last").append(formattedDescription);

	if(projects.projects[project].images.length > 0){
	    for(image in projects.projects[project].image){
		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
		$(".project-entry:last").append(formattedImage);
	    }
	}
	var description = projects.projects[project].description;
	bulletDisplay(description,".project-entry:last");
    }

}

projects.display();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});

//$("#mapDiv").append(googleMap);
