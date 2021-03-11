const myHeading = document.querySelector('h1');
myHeading.textContent = 'William Kelley';

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let userName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Nice to meet you, ' + userName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
