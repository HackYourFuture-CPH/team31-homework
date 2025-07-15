console.log("=======0.6 Objects=======");

let book = [
  {
    title: "Earth, Wind & Fire",
    author: "Rupert Green",
    yearPublished: 2015,
  },
  {
    title: "Bible",
    author: "GOD",
    yearPublished: 0,
  },
];

function bookOverview() {
  for (let i = 0; i < book.length; i++) {
    let title = book[i].title;
    let author = book[i].author;
    let yearPublished = book[i].yearPublished;
    let bookAge = new Date().getFullYear() - book[i].yearPublished;
    console.log(
      `The book ${title} is written by ${author} and was published in ${yearPublished} and is ${bookAge} years old.`
    );
  }
}

bookOverview();
