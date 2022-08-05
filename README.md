# Landing Page Project

## Table of Contents

* what changes happend?
* Code comments
* latest changes


### what changes happend?

index.html:
→ added script tag to call app.js
→ added two more sections to see if functions to create Navbar are working

styles.css:
→ one new class added: .navbar__menu .menu__active || it makes a new background to highlight the current section in the nav bar
→ added smooth scrolling

app.js:
basically everything happend in there
→ two needed global variables:
1. section_arr:
    creates an array that consists all sections
2. NavMenu:
    will be populated to become the nav bar

→ two functions
1. populateNavBar: 
    to check number of sections and populate the navigation bar with the correct number of links
2. activateSection:
    to add and remove "active"-classes to sections + navbar list items whenever a section is in the viewport or not

### Code comments

all newly added code is commented to make it easy to understand.
Besides, I tried to use as less functions as possible but as many as needed to achieve the goals in an understandable way.

### latest changes

app.js:
two further functions
1. scroller
       the scroller function enables the click on the list item to redirect to the correct section
2. clickNavBar
       clicknavbar recognises a click onto the navigation menu
