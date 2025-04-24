// Check if there's any existing data in localStorage
let userList = JSON.parse(localStorage.getItem('userList')) || [];

// Handle form submission
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Create user object
    const newUser = {
        username: username,
        email: email,
        password: password
    };

    // Push user data to array and update localStorage
    userList.push(newUser);
    localStorage.setItem('userList', JSON.stringify(userList));

    // Send data using AJAX POST method
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://your-server-url.com/api/register", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Redirect to new page displaying user data list
            window.location.href = "user_list.html";
        }
    };

    xhr.send(JSON.stringify(newUser));
});
