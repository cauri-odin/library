const body = document.querySelector('body')
let library = []

function Book(title, author, numberOfPages, isRead) {
    this.title = title
    this.author = author
    this.numberOfPages = numberOfPages
    this.isRead = isRead
}

Book.prototype.toString = function() {
    return `${this.title} by ${this.author}, ` +
        `${this.numberOfPages} pages, ` +
        `${this.isRead ? "read" : "not read yet"}`
}

function addToLibrary(book) {
    library.push(book)
}

function displayLibrary() {
    for (const book of library) {
        const pBook = document.createElement('div')
        pBook.textContent = book.toString()
        body.appendChild(pBook)
    }
}

addToLibrary(new Book("The Hobbit", "J.R.R. Tolkien", 295, true))
addToLibrary(new Book("The Lord of the Rings", "J.R.R. Tolkien", 1178, false))
displayLibrary()