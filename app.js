const bookList = document.querySelector('.book-list')
const add = document.querySelector('#add')

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
    bookList.innerHTML = ''
    for (const book of library) {
        const div = document.createElement('div')
        div.classList.add('book')
        div.textContent = book.toString()
        bookList.appendChild(div)
    }
}

add.addEventListener("click", (event) => {
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const pages = +document.querySelector('#pages').value
    const read = document.querySelector('#read').checked

    addToLibrary(new Book(title, author, pages, read))
    displayLibrary()
})