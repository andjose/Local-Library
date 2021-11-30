function findAccountById(accounts, id) {
  for (let i = 0; i < accounts.length; i++){
    if (accounts[i].id === id){
      return accounts[i]
    }
  }
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) => (accountA.name.last > accountB.name.last ? 1:-1));
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  let result = books.reduce((acc, book) => {
    for(let i=0; i < book.borrows.length;i++){
      if(book.borrows[i].id === account.id){
        acc++;
      }}
    return acc;
  },0)
  return result;
}

function getBooksPossessedByAccount(account, books, authors) {
  let booksAndAuthors = [];
  
  for (let i = 0; i < books.length;i++){
    const book = books[i];
    
    for(let j = 0; j < book.borrows.length; j++){
      for(let k = 0; k < authors.length; k++){
        
  if(book.borrows[j].id === account.id && book.borrows[j].returned === false && authors[k].id === book.authorId){
          booksAndAuthors.push({id:book.id,
                               title: book.title,
                               genre: book.genre,
                               authorId: book.authorId,
                               author: authors[k],
                               borrows: book.borrows[j]});
        }
      }
    }
  }
  return booksAndAuthors;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
