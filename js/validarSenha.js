

function validarSenhaForca() {
    var password = document.getElementById('senha').value;
    var forca = 0;

    console.log(password);
    document.getElementById("impSenha").innerHTML = "Senha " + password;


    if ((password.length > 5) && (password.length < 7)) {
        alert("Senha deve ter no minimo 6 caracteres!")
    } else if (password.length > 10) {
        document.getElementById('senha').value = "";
        alert("Senha deve ter no maximo 10 caracteres!")
    } else {
        if ((password.length >= 6) && (password.length <= 7)) {
            forca += 10;
        } else if (password.length > 7) {
            forca += 25;
        }
        if ((password.length >= 5) && (password.match(/[a-z]+/))) {
            forca += 10;
        }
        if ((password.length >= 6) && (password.match(/[A-Z]+/))) {
            forca += 20;
        }
        if ((password.length >= 7) && (password.match(/[@#$%&*!/?;]/))) {
            forca += 25;
        }

        mostrarForca(forca);
    }

}

function mostrarForca(forca) {
    document.getElementById("impForcaSenha").innerHTML = "Forca: " + forca;
    if (forca < 30) {
        document.getElementById("erroSenhaForca").innerHTML = "<span style= 'color:#ff0000'>Fraca</span>";
    }
    else if ((forca >= 30) && (forca < 50)) {
        document.getElementById("erroSenhaForca").innerHTML = "<span style= 'color:#ffd700'>Media</span>";
    }
    else if ((forca >= 50) && (forca < 70)) {
        document.getElementById("erroSenhaForca").innerHTML = "<span style= 'color:#7fff00'>Forte</span>";
    }
    else if (forca > 70) {
        document.getElementById("erroSenhaForca").innerHTML = "<span style= 'color:#008000'>Muito Forte</span>";
    }
}

function compararSenhas() {
    var s1 = document.getElementById('senha').value;
    var s2 = document.getElementById('repetirSenha').value;

    if (s1 == "" || s2 == "") {
        document.getElementById("impComparaSenhas").innerHTML = "Campo senha nao digitado, digite a senha";
    }
    else {
        if (s2 != s1) {
            console.log("Senhas devem ser as mesmas, digite novamente");
            document.getElementById("impComparaSenhas").innerHTML = "Senhas devem ser as mesmas, digite novamente";
            s1 = "";
            s2 = "";
        }
        else if (s2 === s1) {
            console.log("Senha sao iguais!");
            document.getElementById("impComparaSenhas").innerHTML = "Senhas sao iguais!";
        }
    }

}




