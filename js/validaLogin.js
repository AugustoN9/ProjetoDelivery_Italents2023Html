function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login == "admin" && senha == "admin") {
        location.href = "index.html";
    } else {
        location.href = "login.html";
    }
}
