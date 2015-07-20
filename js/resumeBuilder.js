/*
This is empty on purpose! Your code to build the resume will go here.
 */


var formattedName,
    formattedRole;
/*
formattedName = HTMLheaderName.replace('%data%', 'jacobxyz');
formattedRole = HTMLheaderRole.replace('%data%', 'java developer');

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName); 
*/

var bio = {
	"name" : "JacobXYZ",
	"age" : 29,
	"picture" : "images/fry.jpg",
	"role" : "webdev"
};

formattedName = HTMLheaderName.replace("%data%", bio.name);
formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);


var work = {
	position : "java developer",
	employer : "xxxx",
	yearsWorked : 5,
	city : "Warsaw",
	dates : "11.2011 - today",
	description : "Java SE, SQL, PL\\SQL, Python"
};

var education = {
	name : "PJWSTK",
	schoolCity : "Warsaw",
	degree : 'mgr inż.',
	dates : "2011 - 2014",
	major : "business application"
};

var formattedSchoolName = HTMLschoolName.replace("%data%", education.name);
var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.degree);
var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.dates);
var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schoolCity);
var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.major);

$('#education').append(HTMLschoolStart);
$('.education-entry').append(formattedSchoolName)
					 .append(formattedSchoolDegree)
					 .append(formattedSchoolDates)
					 .append(formattedSchoolLocation)
					 .append(formattedSchoolMajor);

var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.employer);
var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.position);
var formattedWorkDates = HTMLworkDates.replace("%data%", work.dates);
var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.city);
var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.description);


$('#workExperience').append(HTMLworkStart);
$('.work-entry').append(formattedWorkEmployer);
$('.work-entry').append(formattedWorkTitle);
$('.work-entry').append(formattedWorkDates);
$('.work-entry').append(formattedWorkLocation);
$('.work-entry').append(formattedWorkDescription);

/*
$('#workExperience').append(work["position"]);
$('#education').append(education.name);*/


