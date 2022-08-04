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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables 
*/

// find all sections and put them in an array ---- will be used in different functions
const section_arr = Array.from(document.querySelectorAll('section'));

// NavMenu will be populated with nav bar entries:
const NavMenu = document.getElementById('navbar__list');



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function populateNavBar() {
    // loop through sections and create a listitem for each section
    for (section of section_arr) {

        // it needs to get some information, gathered out of the sections 
        NavbarListItemName = section.getAttribute('data-nav');
        NavbarListItemLink = section.getAttribute('id');

        // start with creating a list item
        NavbarListItem = document.createElement('li');
        // now we know the name + the id to href it wihtin in the navbar, besides a new id per list item for activating a background color
        // Let's add some content to the above created list item
        NavbarListItem.innerHTML = `<a class='menu__link' href='#${NavbarListItemLink}' id='${NavbarListItemLink}_li'> ${NavbarListItemName} </a>`;

        // after adding content we need to add the list item to the unordered list
        NavMenu.appendChild(NavbarListItem);

    }

}

// this function will be actived on scrolling. It checks which section is currently in the viewport and will set active classes to the section + the list items of the nav bar
function activateSection() {
    // as before, loop through sections:
    for (section of section_arr) {
        // create the new sectionId to access the list items from navbar
        sectionId = section.getAttribute('id') + '_li';
        // check by the size of the section, if the looped section is in the viewport or not (kind of, I didn't find a better solution)
        if (section.getBoundingClientRect().top >= 0 & section.getBoundingClientRect().top < section.getBoundingClientRect().height) {
            // add the given 'your-active-class' to the section, but only to the currently active section
            section.classList.add('your-active-class');
            // do the same for the list item linked to the active section
            document.getElementById(sectionId).classList.add('menu__active');
        } else {
            // remove the active classes in case the looped section is not in the viewport
            section.classList.remove('your-active-class');
            document.getElementById(sectionId).classList.remove('menu__active');
        }
    }

}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// → no helper functions needed, everything is in both functions above.
// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
//→ done via href, not via scroillTO


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
populateNavBar();

// Scroll to section on link click
// → no function needed, done via href

// Set sections as active + set listitems of navbar to active
document.addEventListener('scroll', activateSection);
