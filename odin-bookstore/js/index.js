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
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
}

function createCard(book) {
  const bookEl = document.createElement("div");
  bookEl.classList = "book";

  bookEl.innerHTML = `
    <h3 class="book_title">${book.title}</h3>
          <p class="book_author">${book.author}</p>
          <p class="book_status">Status: <span>${book.isRead ? "Read" : "Not Read"}</span></p>
          <div class="btns">
            <button class="change-btn">Change read status</button>
            <button class="delete-btn">Delete book</button>
          </div>
  `;

  
  return bookEl;
}



function displayBook (){
  bookList.innerHTML = ""
  myLibrary.forEach(book =>{
    const showBook = createCard(book);
    bookList.appendChild(showBook);
  })
}

displayBook()