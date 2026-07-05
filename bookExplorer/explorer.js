const books = [
  {
    title: "Dante's Inferno",
    author: "Dante Alighieri",
    pages: 384
  },
  {
    title: "The Odyssey",
    author: "Homer",
    pages: 541
  },
  {
    title: "Diary Of a Wimpy Kid",
    author: "Jeff Kinney",
    pages: 224
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 310
  },
  {
    title: "Lord of the Rings",
    author: "J.R.R. Tolkien",
    pages: 1178
  }
];

for (let i = 0; i < books.length; i++) {
  console.log(books[i]);
}

const bookList = document.body.children[2];
const firstBook = bookList.children[0];

console.log(bookList);
console.log(firstBook);
console.log(firstBook.parentElement);
console.log(firstBook.nextElementSibling);

console.log(firstBook.textContent);
console.log(firstBook.nodeType);

const pageTitle = document.body.children[0];

console.log(pageTitle.className);

// What is the DOM tree?
// Its the structure of the HTML page

// What is a node in the DOM?
// A node is just a part of the DOM, like an element or text

// What is the difference between a parent and a child node?
// A parent node contains another node. A child node does not

// What is a sibling node?
// A sibling node is just another node with the same parent
