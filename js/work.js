var work = {
    "jobs": [
	{
	    "employer": "GGSE Information Technology Group",
	    "position": "ITG Technical Consultant, Help Desk",
	    "dates": "November 2013 - Present",
	    "location": "Santa Barbara, CA",
	    "description": "Provided computer support of lab, classroom, and department workstations. Offered software, hardware, and licensing support for graduate students, staff, and faculty. Worked on special projects related to deploying and maintaining IT infrastructure."
	},
	{
	    "employer": "De La Guerra Dining Commons",
	    "position": "Student Dining Staff",
	    "dates": "September 2012 - November 2013",
	    "location": "Santa Barbara, CA",
	    "description": "Provided courteous food service to students and staff. Restocked food and supplies and maintained clean food displays. Worked in a team environment to clean dishes and kitchen equipment."	
	}
    ]
}

work.display = function(){
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
	
	bulletDisplay(description, ".work-entry:last");
    }
}

work.display();
