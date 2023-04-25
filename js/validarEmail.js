function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);
    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {

        alert("email valido");
        /*
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Email Valido!',
            showConfirmButton: false,
            timer: 1500
        });
        */
    }
    else {
        alert("E-mail invalido");
        /*
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Email Invalido!'
        });
        */
    }
}

function validateEmail() {

    // Get our input reference.
    var emailField = document.getElementById('email');

    // Define our regular expression.
    var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    // Using test we can check if the text match the pattern
    if (validEmail.test(emailField.value)) {
        alert('Email is valid, continue with form submission');
        return true;
    } else {
        alert('Email is invalid, skip form submission');
        return false;
    }
} 