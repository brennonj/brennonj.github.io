/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
// Step 2: Inside of the object, add a property named name with a value of your name as a string
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
// Step 6: Add another property named placesLived with a value of an empty array

let personal_info = {
    name: 'Brennon Jacobson',
    photo: 'me.jpg',
    favoriteFoods: ['steak', 'fruit', 'french fries', 'eggs'],
    hobbies: ['baseball', 'soccer', 'running', 'video games'],
    placesLived: []
};


// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
// Step 8: For each property, add appropriate values as strings
// Step 9: Add additional objects with the same properties for each place you've lived

personal_info.placesLived =[
    {
        place: 'Maltby, Washington',
        length: 18
    },
    {
        place: 'St. George, Utah',
        length: 1
    },
    {
        place: 'Oklahoma Oklahoma City Mission',
        length: 2
    },
    {
        place: 'Rexburg, Idaho',
        length: 1
    },
    {
        place: 'Provo, Utah',
        length: 3
    },
    {
        place: 'Snohomish, Washington',
        length: 3
    },
    {
        place: 'Lake Stevens, Washington',
        length: 1
    }
];

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.getElementById("name").textContent = personal_info.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").setAttribute("src", `images/${personal_info.photo}`);
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").setAttribute("alt", `Photo of ${personal_info.name}`);


// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
// Step 6: Repeat Step 4 for each hobby in the hobbies property

personal_info.favoriteFoods.forEach( food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.getElementById("favorite-foods").appendChild(li);
});

    

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
personal_info.hobbies.forEach( activity => {
    let ul = document.createElement('ul')
    ul.textContent = activity;
    document.getElementById("hobbies").appendChild(ul);
});

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

const table = document.querySelector('table')

personal_info.placesLived.forEach(location => {
    let tr = document.createElement('tr');
    let td_place = document.createElement('td');
    let td_len = document.createElement('td');

    td_place.textContent = location.place;
    td_len.textContent = location.length;

    tr.appendChild(td_place);
    tr.appendChild(td_len);

    table.appendChild(tr);
})

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
