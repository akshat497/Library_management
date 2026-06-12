let users = JSON.parse(localStorage.getItem("users"));
let books = JSON.parse(localStorage.getItem("books"));
function renderBooks() {
  let table = document.getElementById("booksTable");

  table.innerHTML = "";

  books.forEach((book, index) => {
    table.innerHTML += `
        <tr>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>
                ${book.status}
            </td>
            <td>
                ${book.issuedTo || "no one"}
            </td>

            <td>
                ${
                  book.status == "Issued"
                    ? `<button onclick="issueBook(${(index)},'returnBook')" style="background-color:red;color:white">Return Book</button>`
                    : `<button onclick="issueBook(${(index)}, 'issue')">Issue Book</button>`
                }
            </td>
        </tr>
        `;
  });
}

renderBooks();
let modal = document.getElementsByClassName("modalContainer");
let modalBody = document.getElementsByClassName("modal");
function issueBook(index, action) {
  modal[0].style.display = "flex";

  // selected book
  let book = books[index];

  // modal content
  modalBody[0].innerHTML = `
      <div class="closeBtn" onclick="closeModal()">X</div>

      <h2>${action == "return" ? "Return Book" : "Issue Book"}</h2>

      <div class="bookDetails">
          <p><strong>Book Name:</strong> ${book.name}</p>
          <p><strong>Author:</strong> ${book.author}</p>
          <p><strong>Status:</strong> ${book.status}</p>
          <p><strong>Issued To:</strong> ${book.issuedTo}</p>
      </div>
  `;

  if (action === "returnBook") {
    
    let returnBook = document.createElement("button");

    returnBook.innerText = "Return Book";
    returnBook.style.backgroundColor="red"
    returnBook.style.color="white"

    returnBook.onclick = function () {
      books[index].status = "Available";
      books[index].issuedTo = "";

      localStorage.setItem("books", JSON.stringify(books));

      closeModal();
      renderBooks();
    };

    // IMPORTANT
    modalBody[0].append(returnBook);

  } else {
    studentListDropdown(index);
  }
}



function closeModal() {
  modal[0].style.display = "none";
}
let select = document.createElement("select");

function studentListDropdown(index) {
  let select = document.createElement("select");

  users.forEach(function (user) {
    let option = document.createElement("option");

    option.value = user.name;
    option.innerText = user.name;

    select.append(option);
  });

  modalBody[0].append(select);

  // issue button
  let btn = document.createElement("button");

  btn.innerText = "Confirm Issue";

    btn.style.backgroundColor="green"
    btn.style.color="white"
  btn.onclick = function () {
    books[index].status = "Issued";
    books[index].issuedTo = select.value;
    localStorage.setItem("books", JSON.stringify(books));
    closeModal();
    renderBooks();
  };

  modalBody[0].append(btn);
}
