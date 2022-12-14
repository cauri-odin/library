const bookList = document.querySelector('.book-list')
const add = document.querySelector('#add')

let library = []
let numberOfBooks = 0

function Book(title, author, numberOfPages, isRead) {
    this.id = ++numberOfBooks
    this.title = title
    this.author = author
    this.numberOfPages = numberOfPages
    this.isRead = isRead
}

Book.prototype.toString = function() {
    return `${this.title} by ${this.author}, ${this.numberOfPages} pages`
}

Book.prototype.toggleRead = function() {
    this.isRead = !this.isRead
}

function addToLibrary(book) {
    library.push(book)
}

function removeFromLibrary(id) {
    const index = library.findIndex(book => book.id === id)
    library.splice(index, 1)
}

function displayLibrary() {
    bookList.innerHTML = ''

    for (const book of library) {
        const div = document.createElement('div')
        div.classList.add('book')
        div.textContent = book.toString()

        const label = document.createElement('label')
        label.setAttribute('for', `read-${book.id}`)

        const read = document.createElement('input')
        read.setAttribute('type', 'checkbox')
        read.id = `read-${book.id}`
        read.checked = book.isRead
        label.textContent = 'Read'
        read.addEventListener('click', () => book.toggleRead())

        const remove = document.createElement('button')
        remove.textContent = "-"
        remove.addEventListener("click", () => {
            removeFromLibrary(book.id)
            displayLibrary()
        })

        label.prepend(read)
        div.appendChild(label)
        div.appendChild(remove)
        bookList.appendChild(div)
    }

    console.log(library)
}

add.addEventListener("click", () => {
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const pages = +document.querySelector('#pages').value
    const read = document.querySelector('#read').checked

    addToLibrary(new Book(title, author, pages, read))
    displayLibrary()
})