// Button navi things

var totalProjects = document.getElementsByClassName("project-slider").length;

var slideIndex = 2;     // Current displayed project img to be the second btn
var navStart = slideIndex-1;       // Get first button in the visible group

// Get readmore btn to switch links
var changePageBtn = document.getElementById("page-btn");


///////////////////////////////////////////////////
// Project names,descriptions,links I was lazy to setup json
var projects = [
	{
		title: "SOULBOUND ABYSS",
		description: "Your soul has been torn from your body by Hecate, the goddess of magic and crossroads, after you accidentally interrupt a ritual to her. As you journey through Hecate’s domain, utilise your newly gained teleportation power to solve puzzles and defeat the final boss to recover your body... A top-down action-adventure game where I worked with two game designers and two artists.",
		link: "case_study.html"
	},
	{
		title: "FOOL'S GAMBIT",
		description: "A fast-paced 2D traditional PVE fighting game with themes of Tarot and Major Arcana. Fight and win in a best of 3 to claim the throne. Move, attack and utilize your special attacks to defeat your enemy. Within two months, without any experience on fighting games, I researched, observed and collaborated with my fellow designer to create this game.",
		link: "case_study_2.html"
	},
	{
		title: "COLOR LOOPS",
		description: "The player has to escape the castle they were held in. Armed with magical fire that launches from a gun, player can utilize this to aid in escaping.",
		link: "case_study_3.html"
	},
	{
	title: "Project FER4L",
	description: "The player is the 4th test subject on a study on how mutations will affect survival. Scientists have dropped the player into a controlled environment where the goal is to survive. The player will traverse multiple areas in the environment, mutate to grow stronger to guarantee their survival. With branching mutations of endless possibilities, the player can create their own survival playstyle and be the last to survive. ",
	link: "case_study_4.html"
	},
	{
	title: "Lover's Enigma",
	description: "An otome game where we explore a story in which the protagonist has their own thoughts.",
	link: "case_study_5.html"
	}
];

// Update project info by getting and setting the title and desc
function updateProjectInfo(index){
	document.getElementById("project-title").textContent =
		projects[index - 1].title;

	document.getElementById("project-desc").textContent =
		projects[index - 1].description;
	
	changePageBtn.href = projects[index - 1].link;
}

///////////////////////////////////////////////////

// Button navi
// Constantly updating
updateNav();
showDivs(slideIndex);

function scrollButtons(direction){
	slideIndex += direction;

	if (slideIndex > totalProjects) slideIndex = 1;
	if (slideIndex < 1) navStart = totalProjects;

	showDivs(slideIndex);

	// Get navbtn2 since mid
	navStart = slideIndex - 1;
	if (navStart < 1) navStart = totalProjects;

	updateNav();
}

function updateNav(){
	var buttons = document.getElementsByClassName("project-button");
	var btnImg =  document.getElementsByClassName("project-slider");
	
	for(let i = 0; i < buttons.length; i++){
		let index = navStart + i;

		// Loop le btns
		if(index > totalProjects) index -= totalProjects;

		// Debugging
		//buttons[i].textContent = index;
		
		buttons[i].dataset.index = index;	
		
		// Get corresponding image
		let imgSrc = btnImg[index - 1].src;

		// Set as button background to match image shown
		buttons[i].style.backgroundImage = `url("${imgSrc}")`;
		
	}
}

function navClick(btnPosition){
	var buttons = document.getElementsByClassName("project-button");
	var index = parseInt(buttons[btnPosition].dataset.index);

	showDivs(slideIndex = index);
	
	navStart = slideIndex-1;
	if (navStart < 1) navStart = totalProjects;
	updateNav();
}

// Update project images 
function showDivs(n) {
	var x = document.getElementsByClassName("project-slider");

	if (n > x.length) {slideIndex = 1}
	if (n < 1) {slideIndex = x.length}

	for (let i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x[slideIndex-1].style.display = "block";
	
	// Update project title and desc
	updateProjectInfo(slideIndex);
}
