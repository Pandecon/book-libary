//get the modal
const modal = document.getElementById("myModal");

// get the new book button
const btn = document.getElementById("btn-newBook");


const span = document.getElementsByClassName("close")[0];

btn.addEventListener("click", () => modal.style.display = "block");

span.addEventListener("click", () => modal.style.display = "none");

window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}
let libary = [];
const bookLibary = document.getElementById("book-libary");
const myForm = document.getElementById("myForm");

const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", getBook);

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read ? "checked": "";
}

const hobbit = new Book("The Hobbit", "J.K.K. Tolkien", 295, true);
const potter1 = new Book("Harry Potter", "J.K Rowling", 420, false);

function addBookToLibary(book){
    libary.push(book);
}

function displayLibary(){
    libary.forEach(book => {
        addBook(book)
    });
}

function addBook(book){
    addBookToLibary(book);
    let libIndex = libary.length-1;
    bookLibary.innerHTML += `   
    <div class="book" id="${libIndex}">
        <div id="delete"><a class="x" onclick="deleteBook(${libIndex})">x</a></div>
        <div class="bookdata">
            ${book.title}
        </div>
        <div class="bookdata">
            ${book.author}
        </div>
        <div class="bookdata">
            ${book.pages}
        </div>
        <div class="bookdata">
            Book read: <br>
            <input type="checkbox" ${book.read}>
        </div>
    </div>`;
}

function deleteBook(index){
    libary.splice(index, 1);
    let delBook = document.getElementById(`${index}`);
    delBook.remove();
}

function getBook(){
    let i = 0;
    for (i; i < myForm.length-2; i++) {
        if(myForm.elements[i].value == null || myForm.elements[i].value == "") return;
    }

    const formTitle = document.getElementById("title").value;
    const formAuthor = document.getElementById("author").value;
    const formPages = document.getElementById("pages").value;
    const formRead = document.getElementById("read").checked;

    let newBook = new Book(formTitle, formAuthor, formPages, formRead);

    addBookToLibary(newBook);
    addBook(newBook);
}

addBookToLibary(hobbit);
addBookToLibary(potter1);
displayLibary();