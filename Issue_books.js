let books = [
  {
    id: 1,
    name: "Atomic Habits",
    author: "James Clear",
    status: "Issued",
    issuedTo: "Kanika"
  },
  {
    id: 2,
    name: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    status: "Available",
    issuedTo: ""
  },
  {
    id: 3,
    name: "The Alchemist",
    author: "Paulo Coelho",
    status: "Issued",
    issuedTo: "Harsh"
  },
  {
    id: 4,
    name: "Sapiens",
    author: "Yuval Noah Harari",
    status: "Issued",
    issuedTo: "Sorav"
  },
  {
    id: 5,
    name: "Educated",
    author: "Tara Westover",
    status: "Available",
    issuedTo: ""
  },
  {
    id: 6,
    name: "The Power of Habit",
    author: "James Clear",
    status: "Available",
    issuedTo: ""
  }
];

function renderBooks() {

    let table = document.getElementById("booksTable");

    table.innerHTML = "";

    books.forEach((book,index) => {

        table.innerHTML += `
        <tr>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>
                ${book.issued ? "Issued" : "Available"}
            </td>

            <td>
                ${
                    book.issued
                    ? `<button disabled>Issued</button>`
                    : `<button onclick="issueBook(${index})">Issue Book</button>`
                }
            </td>
        </tr>
        `;
    });
}

renderBooks();

function issueBook(index){

    let studentName = prompt("Enter Student Name");

    if(studentName){

        books[index].issued = true;
        books[index].issuedTo = studentName;

        renderBooks();

        alert(
          books[index].name +
          " issued to " +
          studentName
        );
    }
}
