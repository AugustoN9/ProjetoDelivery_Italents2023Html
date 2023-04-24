const { timers } = require("jquery");

function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    console.log(login + " " + senha);

    if (login == "admin" && senha == "admin") {
        document.querySelector("#mensagem_acesso").insertAdjacentHTML(
            "afterbegin",
            `<div class="card-acesso" >
            <span>Login efetuado com sucesso!</span>
            </div >`
        );

        let mensagem = document.querySelector(".mensagem_acesso");

        setInterval(() => {
            mensagem.style.display = "none";
        }, 3000);

        window.setTimeout("location.href = 'index.html'", 3000);
    }
    if (login != "admin" && senha != "admin") {
        if (login == "" || senha == "") {
            //alert("Campos de usuario ou senha nao foi preenchido!");
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Campos de usuario ou senha nao foi preenchido!'
            });
            //location.href = "login.html";
        }
        else {
            //alert("Campos de usuario e senha incorretos!");
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Campos de usuario e senha incorretos!'
            });
            //location.href = "login.html";
        }
    }


}

