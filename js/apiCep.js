const preencherCadastro = (endereco) => {
    document.getElementById('logradouro').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

const pesquisarCep = async () => {
    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;

    const dados = await fetch(url);
    const endereco = await dados.json();

    if (endereco.hasOwnProperty('erro')) {
        //alert("CEP nao encontrado!");
        Swal.fire("CEP nao encontrado!");
    }
    else {
        preencherCadastro(endereco);
    }

}

document.getElementById('cep')
    .addEventListener('focusout', pesquisarCep);