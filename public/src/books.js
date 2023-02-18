function findAuthorById(authors, id) {
  const found = authors.find((author) => author.id === id);
  return found;
}

function findBookById(books, id) {
  const found = books.find((book) => book.id === id);
  return found;
}

function partitionBooksByBorrowedStatus(books) {
  let finalArray = [];
  const borrowedBooks = books.filter(
    (book) => book.borrows[0].returned === false
  );
  const returnedBooks = books.filter(
    (book) => book.borrows[0].returned === true
  );
  finalArray.push(borrowedBooks, returnedBooks);
  return finalArray;
}

function getBorrowersForBook(book, accounts) {
  return book.borrows
    .map((borrows) => {
      let userAccount = accounts.find((account) => account.id === borrows.id);
      userAccount.returned = borrows.returned;
      return userAccount;
    })
    .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
