const heading = document.getElementById("playlist-heading");
const paragraph = document.querySelector("p");
const songList = document.querySelector("ul");
const button = document.querySelector("button");
const parentDiv = document.querySelector("div");
const jcccLink = document.querySelector("a");

console.log(heading);
console.log(paragraph);

button.addEventListener("click", function () {
  heading.textContent = "Updated Playlist";
  paragraph.textContent = "The playlist was updated.";
  console.log("The update playlist button was clicked.");
});

parentDiv.addEventListener("click", function () {
  console.log("The parent div was clicked.");
});

songList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    console.log(event.target.textContent);
  }
});

jcccLink.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("The default action was prevented.");
});

// Reflection:
// What is the difference between getElementById() and querySelector()?
// getElementById() selects a element by its ID, querySelector() uses any CSS selector.

// What is event bubbling?
// Event bubbling is when an event starts on the clicked element and moves up through their parents.

// What is event delegation?
// Event delegation is when a parent event listener handles clicks from their child elements.

// Why would someone want to use preventDefault()?
// preventDefault() is used to stop the browser's normal or default action, 
// like opening a link or submiting a form.
