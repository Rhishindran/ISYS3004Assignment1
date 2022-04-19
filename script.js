let Home = document.getElementById('b1');
let Admin = document.getElementById('b2');
let Introduction = document.getElementById('b3');
let Assesments = document.getElementById('b4');
let PrivacyCopyright = document.getElementById('b5');
let AcademicIntegrity = document.getElementById('b6');
let AdditionalInformation= document.getElementById('b7');
let ProgramCalendar = document.getElementById('b8');

let CC = document.getElementById('cc');

let theme = "light";

/*Runs On load function*/
(function () {
    selectPage("home") ;
})();


/*document.getElementById('page3').style.display = "none";*/
function clearPage()
{
  document.getElementsByClassName('home')[0].style.display = "none";
  document.getElementsByClassName('admin')[0].style.display = "none";
  document.getElementsByClassName('introduction')[0].style.display = "none";
  document.getElementByClassName('assesments')[0].style.visibility ='hidden';
  document.getElementsByClassName('privacyCopyright')[0].style.display = "none";
  document.getElementsByClassName('academicIntegrity')[0].style.display = "none";
  document.getElementsByClassName('additionalInformation')[0].style.display = "none";
  document.getElementsByClassName('programCalendar')[0].style.display = "none";
  
}

function showHomePage() 
{
  clearPage();
  document.getElementsByClassName('home')[0].style.display = "initial";

}

function selectPage(pagename)
{
  clearPage();
  document.getElementsByClassName(pagename)[0].style.display = "initial";
}


function ChangeColor(argument) 
{
  if(theme == "light")
  {
    document.body.style.backgroundColor = "slategrey";
    document.body.style.color = "white";
    theme = "dark";
  }
  else
  {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    theme = "light";
  }
}

Home.addEventListener('click',(event) => selectPage("home"));
Admin.addEventListener('click',(event) => selectPage("admin"));
Introduction.addEventListener('click',(event) => selectPage("introduction"));
Assesments.addEventListener('click',(event) => selectPage("assesments"));
PrivacyCopyright.addEventListener('click',(event) => selectPage("privacyCopyright"));
AcademicIntegrity.addEventListener('click',(event) => selectPage("academicIntegrity"));
AdditionalInformation.addEventListener('click',(event) => selectPage("additionalInformation"));
ProgramCalendar.addEventListener('click',(event) => selectPage("programCalendar"));


/*
Home.addEventListener('click',(event) => showHomePage());
Admin.addEventListener('click',(event) => showAdminPage());
Introduction.addEventListener('click',(event) => showIntroductionPage());
Assesments.addEventListener('click',(event) => showAssesmentsPage());
PrivacyCopyright.addEventListener('click',(event) => showPrivacyCopyrightPage());
AcademicIntegrity.addEventListener('click',(event) => showacAdemicIntegrityPage());
AdditionalInformation.addEventListener('click',(event) => showAdditionalInformationPage());
ProgramCalendar.addEventListener('click',(event) => showProgramCalendarPage());
*/

CC.addEventListener('click',(event) => ChangeColor());