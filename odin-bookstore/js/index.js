const myLibrary = [
  new Book("The Art of Focus", "James Clear", 224, false),
  new Book("Digital Fortress", "Dan Brown", 384, true),
  new Book("Atomic Habits", "James Clear", 320, false),
  new Book("Deep Work", "Cal Newport", 304, true),
  new Book("The Pragmatic Programmer", "Andrew Hunt", 352, false),
  new Book("Sapiens", "Yuval Noah Harari", 498, true),
  new Book("The Midnight Library", "Matt Haig", 304, true),
];

let bookList = document.querySelector(".book__list");

function Book(title, author, pages, isRead) {
  // the constructor...
  if (!new.target) throw new Error("Constructor called without new operator.");
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

const dialogEl = document.getElementById("dialog");

document.querySelector(".add-btn").addEventListener("click", () => {
  // dialogEl.showModel()
  dialogEl.showModal();
});

document.querySelector(".dialog_close").addEventListener("click", () => {
  dialogEl.close();
});

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  //  inputTitle.value.trim()
  e.preventDefault();

  const title = document.querySelector(".title").value.trim();
  const author = document.querySelector(".author").value.trim();
  const pages = document.querySelector(".pages").value.trim();

  if (title && author && pages) {
    addBookToLibrary(title, author, pages, false);
    // Clear form inputs
    form.reset();

    dialogEl.close();
  } else {
    const err = document.querySelector(".dialog_error");
    err.textContent = "Please complete the fields";
  }
});


function addBookToLibrary(title, author, pages, isRead = false) {
  // take params, create a book then store it in the array
  const newBook = new Book(title, author, parseInt(pages), isRead);
  myLibrary.push(newBook);

  //display book added
  displayBook();
}

function removeBookFromLibrary(bookId) {
  let index = myLibrary.findIndex((book) => book.id === bookId);
  if (index !== -1) {
    myLibrary.splice(index, 1);
    displayBook();
  }
}

function toggleReadStatus(bookId) {
  console.log(bookId);
  let book = myLibrary.find((book) => book.id === bookId);
  console.log(book);
  if (book) {
    book.isRead = !book.isRead;
    displayBook();
  }
}

function createCard(book) {
  const bookEl = document.createElement("div");
  bookEl.classList = "book";

  bookEl.innerHTML = `
    <h3 class="book_title">${book.title}</h3>
          <p class="book_author">${book.author}</p>
          <p class="book_pages">${book.pages}</p>

          <p class="book_status">Status: <span>${
            book.isRead ? "Read" : "Not Read"
          }</span></p>
          <div class="btns">
            <button class="change-btn">Change read status</button>
            <button class="delete-btn">Delete book</button>
          </div>
  `;

  //EventListener
  bookEl
    .querySelector(".delete-btn")
    .addEventListener("click", () => removeBookFromLibrary(book.id));
  bookEl
    .querySelector(".change-btn")
    .addEventListener("click", () => toggleReadStatus(book.id));

  return bookEl;
}

function displayBook() {
  bookList.innerHTML = "";

  if (myLibrary.length === 0) {
    let emptyMsg = document.createElement("h1");
    emptyMsg.textContent = "MyLibrary is Empty";
    bookList.appendChild(emptyMsg);
  }

  myLibrary.forEach((book) => {
    const showBook = createCard(book);
    bookList.appendChild(showBook);
  });
}

//Initialize Render
displayBook();
