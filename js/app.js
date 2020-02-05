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

// Create the HTML text for each navigation link
function createNavLinks(sections) {
	let navLinks =[];
	for (let i = 0; i < sections.length; i++) {
		let htmlString = '<a class = "menu__link" href="#' + sections[i].getAttribute('id') +
			'">' + sections[i].getAttribute('data-nav') + '</a>';
		navLinks.push(htmlString);
	}
	return navLinks;
}

// Determine if the section is near the top the viewport
// For our purposes, it must lie in the top third of the screen. May have to adjust as needed.
function isInViewport(element) {
    let bounding = element.getBoundingClientRect();
    return (
        bounding.top >= 0 && bounding.top <= 0.3*(window.innerHeight || document.documentElement.clientHeight)

    );
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// Build the navigation menu
function buildNav(){
	document.addEventListener('DOMContentLoaded', () => {
		const navLinks = createNavLinks(sections);
		for (let i = 0; i < navLinks.length; i++){
			const listItem = document.createElement('li');
			listItem.innerHTML = navLinks[i];
			menuList.appendChild(listItem);
		}
	})
}

// Add class 'active-section' to a section when it's near the top of the viewport
function getActiveSection(){
	window.addEventListener('scroll', event => {
		for (const section of sections){
			if (isInViewport(section)) {
				section.classList.add('active-section');
			}
			else {
				section.classList.remove('active-section');
			}
		}
	});
}

// Scroll to appropriate anchor ID
function scrollToSection(){
	menuList.addEventListener('click', event => {
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

// Build navigation menu
buildNav();

// Scroll to section upon navigation link click
scrollToSection();

// Set sections as active
setTimeout(getActiveSection, 0);


