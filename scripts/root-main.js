// toggle menu in small view
const toggleMenu = () => {
    document.querySelector('#menu').classList.toggle('open');
}

document.querySelector('#toggleMenu').addEventListener('click', toggleMenu);


// set copy right to current year
const currentYear = new Date().getFullYear();
const yearDisplay = document.querySelector('#year');
yearDisplay.textContent = currentYear;