// Retrieve the user list from localStorage
let userList = JSON.parse(localStorage.getItem('userList')) || [];

// Display the list of users
const userListElement = document.getElementById('userList');

// Loop through the user list and create list items
userList.forEach(user => {
    const userItem = document.createElement('li');
    userItem.textContent = `Username: ${user.username}, Email: ${user.email}`;
    userListElement.appendChild(userItem);
});
