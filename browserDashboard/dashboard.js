console.log("Current page URL:", location.href);
console.log("Browser language:", navigator.language);
console.log("Browser online:", navigator.onLine);
console.log("Screen width:", screen.width);
console.log("Screen height:", screen.height);
console.log("Browser window width:", window.innerWidth);
console.log("Browser window height:", window.innerHeight);

const form = document.forms.dashboardForm;
const userNameField = form.elements.userName;
const favoriteWebsiteField = form.elements.favoriteWebsite;
const output = document.getElementById("output");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const userName = userNameField.value;
  const favoriteWebsite = favoriteWebsiteField.value;
  const websiteUrl = new URL(favoriteWebsite);

  localStorage.setItem("userName", userName);
  const storedUserName = localStorage.getItem("userName");
  console.log("Stored user name:", storedUserName);

  sessionStorage.setItem("favoriteWebsite", favoriteWebsite);
  const storedFavoriteWebsite = sessionStorage.getItem("favoriteWebsite");
  console.log("Stored favorite website:", storedFavoriteWebsite);

  output.textContent = `Name: ${userName}, Favorite website: ${favoriteWebsite}`;
  console.log("Hostname:", websiteUrl.hostname);
  console.log("Protocol:", websiteUrl.protocol);
  console.log("Pathname:", websiteUrl.pathname);
});

userNameField.addEventListener("focus", function () {
  console.log("The name field was selected.");
});

userNameField.addEventListener("blur", function () {
  console.log("The name field was left.");
});

const backButton = document.getElementById("back-button");
const forwardButton = document.getElementById("forward-button");

backButton.addEventListener("click", function () {
  console.log("The Back button was clicked.");
  history.back();
});

forwardButton.addEventListener("click", function () {
  console.log("The Forward button was clicked.");
  history.forward();
});


// What is the difference between localStorage and sessionStorage?
// localStorage keeps the data after the browser closes, while sessionStorage 
// only exist in the current tab.

// What information can the Navigator object provide?
// The Navigator object provides information like browser language and
// your online status.

// What happens when an input field receives focus?
// When an input receives focus, it becomes active an can 
// accept a user input.

//Why might a website use a URL object?
// A website can use a URL object to access parts of a URL, like its
// hostname or pathname.
