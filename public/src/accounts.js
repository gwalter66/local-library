function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((personA, personB) => personA.name.last.toLowerCase() > personB.name.last.toLowerCase() ? 1: -1) 
 
 }
 

function getTotalNumberOfBorrows(account, books) {
  let total = 0
  books.forEach(book => {
    book.borrows.forEach(borrow => {
      if (borrow.id === account.id) {
        total++
      }
    })
  })
  return total
}

function getBooksPossessedByAccount(account, books, authors) {
  return (books.filter(book => 
    book.borrows[0].id === account.id && !book.borrows[0].returned)
      .map((book) => {
        book["author"] = authors.find((author) => author.id === book.authorId)
        return book
      })
  )
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
