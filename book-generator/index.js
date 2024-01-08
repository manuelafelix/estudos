let btn = document.querySelector('#new-book');
let book = document.querySelector('.book');
let author = document.querySelector('.author');

const books = [
    {book: "Crepúsculo", author: "Stephenie Meyer"},
    {book: "Melhor do que nos filmes", author: "Lynn Painter"},
    {book: "O príncipe cruel", author: "Holly Black"},
    {book: "A hipótese do amor", author: "Ali Hazelwood"},
    {book: "O pequeno príncipe", author: "Antoine de Saint-Exupéry"},
    {book: "Teto para dois", author: "Beth O'Leary"},
    {book: "Daisy Jones & The Six", author: "Taylor Jenkins Reid"},
    {book: "Amor e Gelato", author: "Jenna Evans Welch"},
    {book: "Percy Jackson: O ladrão de raios", author: "Rick Riordan"},
    {book: "Harry Potter: A pedra filosofal", author: "J.K. Rowling"},
];

btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * books.length);

    book.innerText = books[random].book;
    author.innerText = books[random].author;
})