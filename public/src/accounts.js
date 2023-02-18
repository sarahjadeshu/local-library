function findAccountById(accounts, id) {
  const found = accounts.find((account) => account.id === id);
  return found;
}

function sortAccountsByLastName(accounts) {
  const sorted = accounts.sort((accountA, accountB) =>
    accountA.name.last > accountB.name.last ? 1 : -1
  );
  return sorted;
}

function getTotalNumberOfBorrows(account, books) {
  let totalBorrows = 0;
  books.forEach((book) => {
    const bookBorrows = book.borrows;
    bookBorrows.forEach((borrow) => {
      if (borrow.id === account.id) {
        totalBorrows++;
      }
    });
  });
  return totalBorrows;
}

function getBooksPossessedByAccount(account, books, authors) {
  let checkedOutArray = [];
  const currentlyCheckedOut = books.filter((book) => {
    if (
      book.borrows[0].id === account.id &&
      book.borrows[0].returned === false
    ) {
      authors.filter((author) => {
        if (author.id === book.authorId) {
          const id = author.id;
          const { name } = author;
          book.author = { id, name };
          checkedOutArray.push(book);
        }
      });
    }
  });
  return checkedOutArray;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
