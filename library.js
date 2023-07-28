const library = document.querySelector(".library");

let myLibrary = [];

class Book {
    constructor(title, author, pages, status) {
        this.title = form.title.value;
        this.author = form.author.value;
        this.pages = form.pages.value;
        this.status = form.status.value;
    }
}

function addBookToLibrary(event) {
    if (form.title.value && form.author.value && form.pages.value) {
        event.preventDefault();
        const newBook = new Book(title, author, pages, status);
        const createBook = document.createElement("div");
        createBook.classList.add("book-card");
        createBook.innerHTML = 
            `<div class="book-info">
                <div class="book-title">${newBook.title}</div>
                <div class="book-author">by ${newBook.author}</div>
                <div class="book-pages">${newBook.pages} pages</div>
            </div>
            <div class="book-buttons">
                <button class="status-button">${newBook.status}</button>
                <button class="remove-book-button">Remove</button>
            </div>`;
        library.appendChild(createBook);
        myLibrary.push(newBook);
        resetForm();
    }
}

function resetForm() {
    form.title.value = "";
    form.author.value = "";
    form.pages.value = "";
    form.status.value = "Read";
    newBookForm.style.display = "none"
}

const newBookForm = document.querySelector(".new-book");
const addBookButton = document.querySelector("#new-book-button");
addBookButton.addEventListener("click", () => newBookForm.style.display = "block");

const closeForm = document.querySelector(".close-form");
closeForm.addEventListener("click", () => newBookForm.style.display = "none")

const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", addBookToLibrary);
