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
    name: "The Alchemist",
    author: "Paulo Coelho",
    status: "Issued",
    issuedTo: "Harsh"
  },
  {
    id: 3,
    name: "Sapiens",
    author: "Yuval Noah Harari",
    status: "Issued",
    issuedTo: "Sorav"
  },
  {
    id: 4,
    name: "Educated",
    author: "Tara Westover",
    status: "Available",
    issuedTo: ""
  },
  {
    id: 5,
    name: "The Power of Habit",
    author: "James Clear",
    status: "Available",
    issuedTo: ""
  },
  {
    id: 6,
    name: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    status: "Available",
    issuedTo: ""
  }

];

function returnBook(index){

    books[index].status = "Available" && "Issued";

    renderBooks();
}

function renderReturnedBooks(){

    let table = document.getElementById("returnTable");

    table.innerHTML = "";

    books.forEach(book => {

        if(book.status === "Available" && "Issued" ){

            table.innerHTML += `
            <tr>
                <td>${book.name}</td>
                <td>${book.issuedTo}</td>
                <td>${book.status}</td>
            </tr>
            `;
        }
    });
}
renderReturnedBooks();

localStorage.setItem(
    "books",
    JSON.stringify(books)
);