//var formattedName = HTMLheaderName.replace("%data%", "KEVIN MAI")
//$("#header").prepend(formattedName);
//$("#main").append("hi");

var bio = {
    "name": "Kevin Mai",
    "age": 20,
    "city": "Fountain Valley",
    "contacts": {
	"email": "kevinmai993@yahoo.com",
	"mobile": "714-200-4960"
    },
    "welcomeMessage": "Welcome to my webpage!",
    "skills": [
	"C, C++, Java, Eclipse"
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

var education = {
    "schools": [
	{
	    "name": "UCSB",
	    "city": "Santa Barbara",
	    "degree": "Bachelor of Science",
	    "major" : "Computer Science"
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
	    "github": "stub",
	}
    ]
}
$("#header").append(HTMLskillsStart);

if(bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);
    
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
}

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


$("#main").append(bio.name);
//$("#header").append(work.jobs[0].position);
//$("#main").append(education.schools.name);
