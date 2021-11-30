function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let count = 0;
  let booksBorrowed = books.map(function (book){
    return book.borrows;
  });
  for (let i = 0; i < booksBorrowed.length; i++ ){
    for (let k = 0; k < booksBorrowed[i].length; k++){
      if (booksBorrowed[i][k].returned === false){ count++;}
    }
  }
  return count;
}

function getMostCommonGenres(books) {
  let genres = {};
  for  (let i = 0; i < books.length; i++){
    if(books[i].genre in genres){
      genres[books[i].genre].count += 1;
    }
    else {
      genres[books[i].genre] = {};
      genres[books[i].genre].count = 1;
     
    }
  }
  let arrangedGenres = [];
  for (key in genres){
    arrangedGenres.push({name:key, count: genres[key].count});
  }
  arrangedGenres.sort((a,b) => { return b.count - a.count});
  final = arrangedGenres.slice(0,5);
  return final;
}

function getMostPopularBooks(books) {
  let arrangeBooks = [];
  for (let i = 0; i < books.length; i++){
    let book = books[i];
    arrangeBooks.push({name:book.title, count:book.borrows.length});
  }
  arrangeBooks.sort((a,b) => {
    return b.count - a.count
  });
  final = arrangeBooks.slice(0,5);
  return final;
  
}

function getMostPopularAuthors(books, authors) {
  let arrangedAuthors = [];
  for(let i = 0; i<books.length; i++){
    let book = books[i];
    for(let j = 0; j<authors.length; j++){
      let author = authors[j]
      if (book.authorId === author.id){
        arrangedAuthors.push({name: author.name.first + " " + authors[j].name.last, count: books[i].borrows.length})
      }
      }
    }
  
  arrangedAuthors.sort((a,b) => { return b.count - a.count});
  final = arrangedAuthors.slice(0,5);
  return final;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
