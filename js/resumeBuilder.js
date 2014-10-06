//var formattedName = HTMLheaderName.replace("%data%", "KEVIN MAI")
//$("#header").prepend(formattedName);
//$("#main").append("hi");

var bio = {
    "name": "Kevin Mai",
    "role": "Student",
    "contacts": {
	"mobile": "714-200-4960",
	"email": "kevinmai993@yahoo.com",
	"github": "kmai12",
	"twitter": "hi",
	"location": "Santa Barbara"
    },
    "welcomeMessage": "Welcome to my webpage!",
    "skills": [
	"C", "C++", "Java", "Eclipse"
    ],
    "bioPic": "images/fry.jpg"
}

function displayBio(){
    
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
    //    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    //    $("#header").append(formattedRole);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGitHub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBioPic);
    var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcome);

    if(bio.skills.length > 0){
	
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
    }
}

displayBio();

var education = {
    "schools": [
	{
	    "name": "University of California, Santa Barbara",
	    "city": "Santa Barbara",
	    "degree": "Bachelor of Science",
	    "major" : "Computer Science"
	}
    ]
}

var work = {
    "jobs": [
	{
	    "employer": "GGSE",
	    "position": "Student Help Desk",
	    "dates": "November 2013 - Present",
	    "description": "stub"
	},
	{
	    "employer": "De La Guerra Dining Commons",
	    "position": "Student Dining Staff",
	    "dates": "September 2012 - November 2013",
	    "description": "stub"	
	}
    ]
}

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
	
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);
	
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
    }
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
