function getGenres(books) {
  return books.map((book) => book.genre);
}

function getTotalBooksCount(books) {
  let totalBooks = 0;
  books.forEach((book) => totalBooks++);
  return totalBooks;
}

function getTotalAccountsCount(accounts) {
  let totalAccounts = 0;
  accounts.forEach((account) => totalAccounts++);
  return totalAccounts;
}

function getBooksBorrowedCount(books) {
  let totalBooksBorrowed = 0;
  books.forEach((book) => {
    if (book.borrows[0].returned === false) {
      totalBooksBorrowed++;
    }
  });
  return totalBooksBorrowed;
}

function getMostCommonGenres(books) {
  let commonGenres = [];
  let genres = getGenres(books);
  let genreCount = genres.reduce((user, genre) => {
    if (user[genre] === undefined) {
      user[genre] = 1;
    } else {
      user[genre]++;
    }
    return user;
  }, {});
  for (let genre in genreCount) {
    const counter = genreCount[genre];
    commonGenres.push({ name: genre, count: counter });
  }
  commonGenres.sort((genreA, genreB) => genreB.count - genreA.count);
  let topFive = commonGenres.slice(0, 5);
  return topFive;
}

function getMostPopularBooks(books) {
  let popularBooks = [];
  let popularBookList = books.sort(
    (bookA, bookB) => bookB.borrows.length - bookA.borrows.length
  );
  let topFive = popularBookList.slice(0, 5);
  topFive.forEach((book) => {
    const counter = book.borrows.length;
    const title = book.title;
    popularBooks.push({ name: title, count: counter });
  });
  return popularBooks;
}

function getMostPopularAuthors(books, authors) {
  let popularAuthors = [];
  authors.forEach((author) => {
    let counter = 0;
    books.forEach((book) => {
      if (author.id === book.authorId) {
        counter += book.borrows.length;
      } else {
        counter += 0;
      }
    });
    const firstName = author.name.first;
    const lastName = author.name.last;
    popularAuthors.push({ name: firstName + " " + lastName, count: counter });
  });
  popularAuthors.sort((authorA, authorB) => authorB.count - authorA.count);
  popularAuthors.splice(5);
  return popularAuthors;
}

module.exports = {
  getGenres,
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
