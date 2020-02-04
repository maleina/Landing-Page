/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const sections = document.querySelectorAll('section');
const menuList = document.querySelector('#navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

function getSectionNames(sections) {
	let sectionNames =[];
	for (let i = 0; i < sections.length; i++) {
		let htmlString = '<a class = "menu__link" href="#' + sections[i].getAttribute('id') +
			'">' + sections[i].getAttribute('data-nav') + '</a>';
		sectionNames.push(htmlString);
	}
	return sectionNames;
}

function scrollToSection(event) {

}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
function buildNav(){
	const sectionNames = getSectionNames(sections);
	for (let i = 0; i < sectionNames.length; i++){
		const listItem = document.createElement('li');
		listItem.innerHTML = sectionNames[i];
		menuList.appendChild(listItem);
	}
}

// Add class 'active' to section when near top of viewport
function getActiveSection(){

}

// Scroll to anchor ID using scrollTO event
function scrollToSection(){
	menuList.addEventListener('click', function(event) {
		event.preventDefault();
		document.querySelector(event.toElement.hash).scrollIntoView({
            behavior: 'smooth'
        });
	});


}


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
buildNav();

// Scroll to section on link click
scrollToSection();

// Set sections as active


