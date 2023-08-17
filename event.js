// Get a reference to the button and message element
const myButton = document.getElementById("myButton");
const messageElement = document.getElementById("message");

// Define a function to change the button text
function changeButtonText() {
    myButton.textContent = "Clicked!";
    messageElement.textContent = "Button was clicked!";
}

// Attach an event listener to the button
myButton.addEventListener("click", changeButtonText);
