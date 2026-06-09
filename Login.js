let users = [
  {
    id: 1,
    name: "Akshat Saini",
    email: "akshat@example.com",
    password: "Akshat@123",
    role: "admin",
    phone: "9876543210",
    status: "active",
  },
  {
    id: 2,
    name: "Neha Singh",
    email: "neha@example.com",
    password: "Neha@123",
    role: "student",
    phone: "9876543211",
    status: "active",
  },
  {
    id: 3,
    name: "Priyanshu Kumar",
    email: "priyanshu@example.com",
    password: "Priyanshu@123",
    role: "librarian",
    phone: "9876543212",
    status: "inactive",
  },
  {
    id: 4,
    name: "Garima Sharma",
    email: "garima@example.com",
    password: "Garima@123",
    role: "student",
    phone: "9876543213",
    status: "active",
  },
  {
    id: 5,
    name: "Pankaj Verma",
    email: "pankaj@example.com",
    password: "Pankaj@123",
    role: "student",
    phone: "9876543214",
    status: "blocked",
  },
  {
    id: 6,
    name: "Hosiyar Singh",
    email: "hosiyar@example.com",
    password: "Hosiyar@123",
    role: "teacher",
    phone: "9876543215",
    status: "active",
  },
  {
    id: 7,
    name: "Ritika Malhotra",
    email: "ritika@example.com",
    password: "Ritika@123",
    role: "student",
    phone: "9876543216",
    status: "active",
  },
  {
    id: 8,
    name: "Aman Gupta",
    email: "aman@example.com",
    password: "Aman@123",
    role: "teacher",
    phone: "9876543217",
    status: "inactive",
  },
  {
    id: 9,
    name: "Simran Kaur",
    email: "simran@example.com",
    password: "Simran@123",
    role: "librarian",
    phone: "9876543218",
    status: "active",
  },
  {
    id: 10,
    name: "Rahul Mehta",
    email: "rahul@example.com",
    password: "Rahul@123",
    role: "student",
    phone: "9876543219",
    status: "active",
  },
];
let response = {};
function Login() {
  try {
   
    let userName = document.getElementById("username");
    let Password = document.getElementById("Password");
    console.log(userName.value, Password.value);
    let foundUser = users.find(function (user) {
      return (
        user.email.toLowerCase() == userName.value.toLowerCase() &&
        user.password == Password.value
      );
    });

    if (foundUser) {
      response.message = "Login successfull";
      response.userdata = {
        id: foundUser.id,
        name: foundUser.name,
        email: foundUser.email,
        role: foundUser.role,
        phone: foundUser.phone,
        status: foundUser.status,
      };
      console.log(response)
      window.location.href = "library_management.html";

    } else {
      response.message = "wrong crediantials";
      console.log(response)
      
    }
  } catch (error) {
    console.log(error);
  }
}