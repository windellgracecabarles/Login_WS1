function register(event) {
    event.preventDefault();

    let fullname = document.getElementById("fullname").value;
    let username = document.getElementById("regUsername").value;
    let password = document.getElementById("regPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (password != confirmPassword) {
        alert("Password does not match!");
        return;
    }

    localStorage.setItem("fullname", fullname);
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Registration successful!");

    window.location.href = "../login/index.html";
}


function login(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let savedUsername = localStorage.getItem("username");
    let savedPassword = localStorage.getItem("password");

    if (username == savedUsername && password == savedPassword) {

        window.location.href = "../dashboard/dashboard.html";

    } else {

        alert("Wrong username or password!");

    }
}


function logout() {
    window.location.href = "../login/login.html";
}


window.onload = function() {

    let name = document.getElementById("name");

    if (name) {

        let fullname = localStorage.getItem("fullname");

        if (fullname) {
            name.innerHTML = fullname;
        }

    }
};