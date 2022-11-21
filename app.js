const bookList = document.querySelector('.book-list')
let library = []

function Book(title, author, numberOfPages, isRead) {
    this.title = title
    this.author = author
    this.numberOfPages = numberOfPages
    this.isRead = isRead
}

Book.prototype.toString = function() {
    return `${this.title} by ${this.author}, \n` +
        `${this.numberOfPages} pages, \n` +
        `${this.isRead ? "read" : "not read yet"}`
}

function addToLibrary(book) {
    library.push(book)
}

function displayLibrary() {
    for (const book of library) {
        const card = document.createElement('div')
        card.classList.add('book')
        card.textContent = book.toString()
        bookList.appendChild(card)
    }
}

addToLibrary(new Book("The Hobbit", "J.R.R. Tolkien", 295, true))
addToLibrary(new Book("The Lord of the Rings", "J.R.R. Tolkien", 1178, false))
displayLibrary()