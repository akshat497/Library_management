function ToggleSidebar() {
    let sideBar = document.getElementsByClassName("sideBar")[0];

    if (sideBar.style.width === "0%") {
        sideBar.style.width = "17%";
    } else {
        sideBar.style.width = "0%";
    }

    sideBar.style.transition = "0.3s";
}

function logout(){

    localStorage.removeItem("isLoggedIn");

    alert("Logged Out Successfully");

    window.location.href = "Login.html";
}

let transactions = [
  {
    id: "TX001",
    member: "Kanika",
    book: "Atomic Habits",
    status: "Issued",
    dueDate: "2026-06-10"
  },
   {
    id: "TX002",
    member: "Neha",
    book: "Rich Dad Poor Dad",
    status: "Returned",
    dueDate: "2026-06-01"
  },
  {
    id: "TX003",
    member: "Harsh",
    book: "The Alchemist",
    status: "Overdue",
    dueDate: "2026-06-01"
  },
  {
    id: "TX004",
    member: "Sorav",
    book: "Sapiens",
    status: "Issued",
    dueDate: "2026-06-15"
  },
];

function renderTable() {
  let tbody = document.getElementById("tableBody");
  tbody.innerHTML = "";

  let today = new Date();

  transactions.forEach(item => {

    let fine = 0;

    if (item.status === "Overdue") {
      let dueDate = new Date(item.dueDate);
      let diff = today - dueDate;
      let days = Math.floor(diff / (1000 * 60 * 60 * 24));

      if (days > 0) {
        fine = days * 10;
      }
    }

    tbody.innerHTML += `
      <tr>
        <td>${item.id}</td>
        <td>${item.member}</td>
        <td>${item.book}</td>
        <td>${item.status}</td>
        <td>${item.dueDate}</td>
        <td>₹${fine}</td>
      </tr>
    `;
  });
}
renderTable();

