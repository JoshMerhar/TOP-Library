const mainContent = document.querySelector(".library");

let myLibrary = [{title: "Some Book", author: "Some Person", pages: 830, status: "Read"}];
resetPage();
displayLibrary();

const newBookForm = document.querySelector(".new-book");
const addBookButton = document.querySelector("#new-book-button");
addBookButton.addEventListener("click", () => newBookForm.style.display = "block");

const closeForm = document.querySelector(".close-form");
closeForm.addEventListener("click", () => newBookForm.style.display = "none")

const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", addBookToLibrary);

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
        myLibrary.push(newBook);
        resetForm();
        displayLibrary();
    }
}

function displayLibrary() {
    resetPage();
    if (myLibrary) {
        for (let i = 0; i < myLibrary.length; i++) {
            const createBook = document.createElement("div");
            createBook.classList.add("book-card");
            createBook.innerHTML = 
                `<div class="book-info">
                    <div class="book-title">${myLibrary[i].title}</div>
                    <div class="book-author">by ${myLibrary[i].author}</div>
                    <div class="book-pages">${myLibrary[i].pages} pages</div>
                </div>
                <div class="book-buttons">
                    <button class="status-button">${myLibrary[i].status}</button>
                    <button class="remove-book-button">Remove</button>
                </div>`;
            myLibrary[i].id = i;
            mainContent.appendChild(createBook);
            setStatus(i);
        }
        const removeButtons = document.querySelectorAll(".remove-book-button");
        removeButtons.forEach((removeButton, i) => {
        removeButton.addEventListener("click", () => removeBook(i));
    });
    }
    return;
}

function setStatus(bookIndex) {
    const statusButton = document.querySelector(`.book-card:nth-child(${bookIndex + 1}) .status-button`);
        if (myLibrary[bookIndex].status === "Read") {
            statusButton.classList.add("status-button-read");
        } else {
            statusButton.classList.add("status-button-unread");
        }
    statusButton.addEventListener("click", () => changeStatus(bookIndex));
}

function changeStatus(bookIndex) {
    const statusButton = document.querySelector(`.book-card:nth-child(${bookIndex + 1}) .status-button`);
    if (myLibrary[bookIndex].status === "Read") {
        myLibrary[bookIndex].status = "Not read";
        statusButton.classList.remove("status-button-read");
        statusButton.classList.add("status-button-unread");
        statusButton.textContent = "Not read";
    } else {
        myLibrary[bookIndex].status = "Read";
        statusButton.classList.remove("status-button-unread");
        statusButton.classList.add("status-button-read");
        statusButton.textContent = "Read";
    };
}

function removeBook(bookIndex) {
    myLibrary.splice(bookIndex, 1);
    displayLibrary();
}

function resetForm() {
    form.title.value = "";
    form.author.value = "";
    form.pages.value = "";
    form.status.value = "Read";
    newBookForm.style.display = "none"
}

function resetPage() {
    const allBooks = document.querySelectorAll(".book-card");
    allBooks.forEach(book => {
        book.remove();
    })
}
