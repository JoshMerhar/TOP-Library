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
        const createBook = new Book(title, author, pages, status);
        const newBook = document.createElement("div");
        newBook.classList.add("book");
        newBook.textContent = createBook.title + " by " + createBook.author + ", " + createBook.pages + " pages - " + "Status: " + createBook.status;
        library.appendChild(newBook);
        myLibrary.push(createBook);
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