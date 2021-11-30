function findAuthorById(authors, id) {
  let final = authors.find((author) => author.id === id);
  return final;
}

function findBookById(books, id) {
  let final = books.find((book) => book.id === id);
  return final;
}

function partitionBooksByBorrowedStatus(books) {
  let fullAnswer = [];
  let returned = books.filter((book) => book.borrows[0].returned === true);
  let notReturned = books.filter((book) => book.borrows[0].returned === false);
  fullAnswer.push(notReturned);
  fullAnswer.push(returned);
  return fullAnswer;
}

function getBorrowersForBook(book, accounts) {
  let final = [];
  for(let i = 0; i < book.borrows.length; i++){
    for(let k = 0; k < accounts.length; k++){
      if (book.borrows[i].id === accounts[k].id){
        let merge = {...book.borrows[i], ...accounts[k]};
        final.push(merge);
      }
    }
  }
  borrowsForBookFirstTen = final.slice(0,10);
  return borrowsForBookFirstTen;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
