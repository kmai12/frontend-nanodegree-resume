var education = {
    "schools":
    {
	"name": "University of California, Santa Barbara",
	"location": "Santa Barbara, CA",
	"dates": "Expected: June 2016",
	"degree": "Bachelor of Science",
	"major" : "Computer Science"
    }
}

education.display = function(){
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%", education.schools.name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools.degree);
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools.dates);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools.location);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools.major);
    $(".education-entry:last").append(formattedLocation);    
    $(".education-entry:last").append(formattedName);
    $(".education-entry:last").append(formattedDates);
    $(".education-entry:last").append(formattedDegree);
    $(".education-entry:last").append(formattedMajor);


}

education.display();
