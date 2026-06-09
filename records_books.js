let user = [
    {
        "id": 1,
        "title": "Harry Potter and the Philosopher's Stone",
        "author": "J.K. Rowling",
        "genre": "Fantasy",
        "available": false,
        "borrowedBy": "Neha Singh",
        "borrowedDate": "2026-05-25",
        "dueDate": "2026-06-15"
    },
    {
        "id": 2,
        "title": "Harry Potter and the Chamber of Secrets",
        "author": "J.K. Rowling",
        "genre": "Fantasy",
        "available": true,
        "borrowedBy": null,
        "borrowedDate": null,
        "dueDate": null
    },
    {
        "id": 3,
        "title": "Fantastic Beasts and Where to Find Them",
        "author": "J.K. Rowling",
        "genre": "Fantasy",
        "available": false,
        "borrowedBy": "Garima Sharma",
        "borrowedDate": "2026-05-29",
        "dueDate": "2026-06-19"
    },
    {
        "id": 4,
        "title": "A Game of Thrones",
        "author": "George R. R. Martin",
        "genre": "Epic Fantasy",
        "available": true,
        "borrowedBy": null,
        "borrowedDate": null,
        "dueDate": null
    },
    {
        "id": 5,
        "title": "A Clash of Kings",
        "author": "George R. R. Martin",
        "genre": "Epic Fantasy",
        "available": false,
        "borrowedBy": "Rahul Mehta",
        "borrowedDate": "2026-05-20",
        "dueDate": "2026-06-10"
    },
    {
        "id": 6,
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "genre": "Fantasy",
        "available": true,
        "borrowedBy": null,
        "borrowedDate": null,
        "dueDate": null
    },
    {
        "id": 7,
        "title": "The Fellowship of the Ring",
        "author": "J.R.R. Tolkien",
        "genre": "Fantasy",
        "available": false,
        "borrowedBy": "Hosiyar Singh",
        "borrowedDate": "2026-06-01",
        "dueDate": "2026-06-22"
    },
    {
        "id": 8,
        "title": "Dune",
        "author": "Frank Herbert",
        "genre": "Science Fiction",
        "available": true,
        "borrowedBy": null,
        "borrowedDate": null,
        "dueDate": null
    },
    {
        "id": 9,
        "title": "The Martian",
        "author": "Andy Weir",
        "genre": "Science Fiction",
        "available": false,
        "borrowedBy": "Neha Singh",
        "borrowedDate": "2026-05-27",
        "dueDate": "2026-06-17"
    },
    {
        "id": 10,
        "title": "Neuromancer",
        "author": "William Gibson",
        "genre": "Cyberpunk",
        "available": true,
        "borrowedBy": null,
        "borrowedDate": null,
        "dueDate": null
    },
    {
        "id": 11,
        "title": "The Da Vinci Code",
        "author": "Dan Brown",
        "genre": "Mystery Thriller",
        "available": false,
        "borrowedBy": "Aman Gupta",
        "borrowedDate": "2026-05-18",
        "dueDate": "2026-06-08"
    },
    {
        "id": 12,
        "title": "Murder on the Orient Express",
        "author": "Agatha Christie",
        "genre": "Mystery",
        "available": true,
        "borrowedBy": null,
        "borrowedDate": null,
        "dueDate": null
    },
    {
        "id": 13,
        "title": "The Hound of the Baskervilles",
        "author": "Arthur Conan Doyle",
        "genre": "Detective Fiction",
        "available": false,
        "borrowedBy": "Rahul Mehta",
        "borrowedDate": "2026-05-30",
        "dueDate": "2026-06-20"
    },
    {
        "id": 14,
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "genre": "Classic Romance",
        "available": true,
        "borrowedBy": null,
        "borrowedDate": null,
        "dueDate": null
    },
    {
        "id": 15,
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "genre": "Classic Fiction",
        "available": false,
        "borrowedBy": "Ritika Malhotra",
        "borrowedDate": "2026-05-24",
        "dueDate": "2026-06-14"
    },
    {
        "id": 16,
        "title": "The Shining",
        "author": "Stephen King",
        "genre": "Horror",
        "available": true,
        "borrowedBy": null,
        "borrowedDate": null,
        "dueDate": null
    },
    {
        "id": 17,
        "title": "Dracula",
        "author": "Bram Stoker",
        "genre": "Gothic Horror",
        "available": false,
        "borrowedBy": "Garima Sharma",
        "borrowedDate": "2026-05-31",
        "dueDate": "2026-06-21"
    },
    {
        "id": 18,
        "title": "The Alchemist",
        "author": "Paulo Coelho",
        "genre": "Adventure Fiction",
        "available": true,
        "borrowedBy": null,
        "borrowedDate": null,
        "dueDate": null
    },
    {
        "id": 19,
        "title": "Atomic Habits",
        "author": "James Clear",
        "genre": "Self Help",
        "available": false,
        "borrowedBy": "Hosiyar Singh",
        "borrowedDate": "2026-05-22",
        "dueDate": "2026-06-12"
    },
    {
        "id": 20,
        "title": "Sapiens",
        "author": "Yuval Noah Harari",
        "genre": "History",
        "available": true,
        "borrowedBy": null,
        "borrowedDate": null,
        "dueDate": null
    }
]

function displayBooks(data) {
    let books = document.getElementById("bookTableBody");
    books.innerHTML = "";
    data.forEach(book => {
        let row = books.insertRow();
        row.insertCell(0).innerHTML = book.title;
        row.insertCell(1).innerHTML = book.author;
        row.insertCell(2).innerHTML = book.genre;
        row.insertCell(3).innerHTML = book.available ? "Yes" : "No";
        row.insertCell(4).innerHTML = book.borrowedBy;
        row.insertCell(5).innerHTML = book.borrowedDate;
        row.insertCell(6).innerHTML = book.dueDate;

        row.onclick = function () {
            let existing = document.getElementById("dropdown_" + book.id);
            if (existing) {
                existing.remove();
            } else {
                let tr = document.createElement("tr");
                tr.id = "dropdown_" + book.id;
                let td = document.createElement("td");
                td.colSpan = 7;
                td.innerHTML = '<div style="display:flex; gap:20px; align-items:center;justify-content:center; padding:10px;">' +
                    '<p>Borrowed By: ' + book.borrowedBy + '</p>' +
                    '<p>Borrowed Date: ' + book.borrowedDate + '</p>' +
                    '<p>Due Date: ' + book.dueDate + '</p>' +
                    '<button class="dropdown-btn">Lend</button>' +
                    '<button class="dropdown-btn">Edit</button>' +
                    '</div>';
                tr.appendChild(td);
                row.after(tr);
            }
        }
    });
}
displayBooks(user);

function searchBooks() {
    let search = document.getElementById("search_books").value.toLowerCase();
    let results = user.filter(book => {
        let cleanAuthor = book.author.replace(/\./g, "").toLowerCase();
        let cleanSearch = search.replace(/\./g, "");

        return book.title.toLowerCase().includes(search) ||
            cleanAuthor.includes(cleanSearch) ||
            book.genre.toLowerCase().includes(search);
    });
    displayBooks(results);
}

