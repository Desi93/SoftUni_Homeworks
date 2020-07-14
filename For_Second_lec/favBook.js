function favoriteBook(input){
    let book = String(input.shift());
    let booksAmount = Number(input.shift());
    let bookCount = 0;
    let currentBook = String(input.shift());

    while(bookCount <= booksAmount){
       
        bookCount++;
        if (currentBook === book){
            console.log(`You checked ${bookCount - 1} books and found it.`);
            break;
        }
        if((currentBook != book) && (bookCount >= booksAmount)){
            console.log(`The book you search is not here!`);
            console.log(`You checked ${bookCount} books.`);
            break;
        }        
        currentBook = String(input.shift());
    }
     
}

favoriteBook([
    'Bourne',
    '32',
    'True Story',
    'Forever',
    'More Space',
    'The Girl',
    'Spaceship',
    'Strongest',
    'Profit',
    'Tripple',
    'Stella',
    'The Matrix',
    'Bourne']);