function findAuthorById(authors, id) {
  for (let i = 0; i < authors.length; i++){
    let author = authors[i]
    if (author.id === id){
      return author
    }
  }
}

function findBookById(books, id) {
  for (let i = 0; i < books.length; i++){
    let book = books[i]
    if(book.id === id){
      return book
    }
  }
}

function partitionBooksByBorrowedStatus(books) {
  let result = []
  const borrowed = books.filter(book => !book.borrows[0].returned)
  const notBorrowed = books.filter(book => book.borrows[0].returned)
  result.push(borrowed)
  result.push(notBorrowed)
  return result
}

function getBorrowersForBook(book, accounts) {
  const transactions = book.borrows;
  const result = [];
  transactions.forEach(transaction => {
    if (result.length >= 10) return;
    const borrower = accounts.find(account => account.id === transaction.id);
    const formattedBorrow = {
      ...transaction,
      ...borrower,
    };
    result.push(formattedBorrow);
  });
  console.log(result);
  return result;
}



module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
