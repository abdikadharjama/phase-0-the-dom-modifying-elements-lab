// Write your code here!
// Task 1: Remove the <main> element with id 'main'
const mainElement = document.querySelector('main#main');
mainElement.remove();

// Task 2: Create a new variable 'newHeader' pointing to an <h1> node
const newHeader = document.createElement('h1');

// Task 3: Set the id of 'newHeader' to 'victory'
newHeader.id = 'victory';

// Task 4: Set innerHTML of 'newHeader' to "YOUR-NAME is the champion"
newHeader.innerHTML = "YOUR-NAME is the champion"; // Replace YOUR-NAME with your actual name

// Append 'newHeader' to the body or any other desired location in the DOM
document.body.appendChild(newHeader);
