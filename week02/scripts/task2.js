/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let myName = 'Brennon Jacobson';
const myNameLabel = document.querySelector('#name');


// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())

myNameLabel.textContent = myName;

// Step 3: declare and instantiate a variable to hold the current year
const currentYear = new Date().getFullYear();
const yearDisplay = document.querySelector('#year');

// Step 4: place the value of the current year variable into the HTML file
yearDisplay.textContent = currentYear;

// Step 5: declare and instantiate a variable to hold the name of your picture
let myImage = 'images/me.jpg';

// Step 6: copy your image into the "images" folder
// [x complete]

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('img').setAttribute('src',myImage);


/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let favFoodsArray = [" steak", " fruit", " french fries", " eggs"];

// Step 2: place the values of the favorite foods variable into the HTML file
const foodDisplay = document.querySelector('#food');
foodDisplay.textContent = favFoodsArray;

// Step 3: declare and instantiate a variable to hold another favorite food
var favFood1 = " pizza";

// Step 4: add the variable holding another favorite food to the favorite food array
favFoodsArray.push(favFood1);

// Step 5: repeat Step 2
foodDisplay.textContent = favFoodsArray;

// Step 6: remove the first element in the favorite foods array
favFoodsArray.shift()

// Step 7: repeat Step 2
foodDisplay.textContent = favFoodsArray;


// Step 8: remove the last element in the favorite foods array
favFoodsArray.pop()

// Step 9: repeat Step 2
foodDisplay.textContent = favFoodsArray;
