// SEARCH BAR FUNCTIONALITY : (by pressing enter or clicking the button)
const input = document.querySelector("input");
// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.querySelector(".search-bar button").click();
  }
});

// add eventlistener for button:
const button = document.querySelector(".search-bar button");
button.addEventListener("click", function() {
    // Add your function here
    console.log("button clicked");
});