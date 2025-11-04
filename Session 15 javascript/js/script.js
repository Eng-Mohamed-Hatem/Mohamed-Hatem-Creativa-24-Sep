function numberOfUsers () {
    var users= prompt("Enter number of Users:");
    var totalNewUsers = +users;
    // return totalNewUsers;
    for (var i = totalNewUsers; i > 0;) {
        addUser();
        i--;
    }
}

allUsers = [];
function addUser() {
    var name =prompt("Enter Your Name:");
    var id =prompt("Enter A Unique ID:");
    var balance =prompt("Enter Your Current Balance:");
    var usersInfo = { name: name, id: id, balance: balance };
    allUsers.push(usersInfo);
    console.log(allUsers);
}

function editUserById() {
    var id= prompt("Enter Current Id:");
    var newBalance = prompt("Enter Your New Balance:");
    var userId = allUsers.find(item => item.id === id);
    if (userId) {
        userId.balance = newBalance;
    }
    console.log(allUsers);
}
function deleteUserById() {
   const deleteId = prompt("Enter Your Id To Delete Your Account:");
    const initialLength = allUsers.length;
    allUsers = allUsers.filter(item => item.id !== deleteId);
}

numberOfUsers();    
editUserById();
deleteUserById();

