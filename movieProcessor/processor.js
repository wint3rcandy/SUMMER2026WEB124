const rawMovieData = [
  "Insidious,Horror,9,Meow@horror.com",
  "Disturbia,Horror,10,Toxic@gmail.com",
  "The Dark Knight,crime,9,bruce@wayne.com",
  "The Backrooms,Horror,8",
  "The Princess Bride,comedy,7,wethepeople@gmail.com",
];

function Movie(title, genre, rating, reviewEmail) {
  this.title = title;
  this.genre = genre;
  this.rating = Number(rating);
  this.reviewEmail = reviewEmail;
  this.id = Symbol(title);

  this.getSummary = function () {
    return this.title + " is a " + this.genre + " movie with a rating of " + this.rating;
  };

  this.isHighlyRated = function () {
    return this.rating >= 8;
  };

  this.getReviewEmail = function () {
    return this.reviewEmail?.trim() || "none";
  };

  this.getID = function () {
    return this.id;
  };
}

const movies = [];

for (let i = 0; i < rawMovieData.length; i++) {
  const movieParts = rawMovieData[i].split(",");

  try {
    if (movieParts.length !== 4) {
      throw new Error("This movie is missing a value.");
    }
  } catch (error) {
    console.log("Error with " + rawMovieData[i] + ": " + error.message);
  }

  const movie = new Movie(movieParts[0], movieParts[1], movieParts[2], movieParts[3]);
  movies.push(movie);
}

console.log("All movie summaries:");
for (let i = 0; i < movies.length; i++) {
  console.log(movies[i].getSummary());
}

const highlyRatedMovies = movies.filter(function (movie) {
  return movie.isHighlyRated();
});

console.log("Highly rated movie titles:");
for (let i = 0; i < highlyRatedMovies.length; i++) {
  console.log(highlyRatedMovies[i].title);
}

const emailRegex = /.+@.+\..+/;

console.log("Email validation:");
for (let i = 0; i < movies.length; i++) {
  const email = movies[i].getReviewEmail();
  const validEmail = emailRegex.test(email);

  console.log(email + ": " + validEmail);
}

const favoriteMovie = movies[0];
console.log("My favorite movie is " + favoriteMovie.title + " and its rating is " + favoriteMovie.rating + ".");

/* Reflection:

What are array methods, and how did you use them in this assignment?
Array methods are just commands that work on arrays. I used filter() method 
to make a new array that only has highly rated movies.

What does your regular expression check for?
The regular expression checks that the email has text before an @ sign, something
after it, a period, and text after the period. basically seeing if its a valid email.

How does try/catch help prevent errors in your program?
try/catch helps prevent errors by letting the program catch a problem and keep 
going instead of crashing. 
*/

