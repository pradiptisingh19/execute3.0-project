import dom from "./dom_manipulator.js";
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
button.addEventListener("click", async function() {
    // Add your function here
    const str='https://api.coingecko.com/api/v3/coins/'+input.value;
    console.log(str);
    const resp= await fetch(str, {mode: 'cors'});
  resp.json().then(function(resp) {
    window.open(resp.links.homepage[0]);
  
  });
    console.log("button clicked");
});
async function fetchapi()
{
  let response= await fetch("https://api.coingecko.com/api/v3/search/trending", {mode: 'cors'});
  response=await response.json();
  // response.json().then(function(response) {

  // putval(response);
  // });
  putval(response);
}

 fetchapi();
 function putval(response)
 {     for(let i=0;i<7;i++)
    { const name=response.coins[i].item.id;
      const icon=response.coins[i].item.large;
      const price=response.coins[i].item.data.price;
      const cap=response.coins[i].item.data.market_cap;
      const obj=new dom();

      obj.createCard(icon,name,price,cap,"by-day");
    }
 }