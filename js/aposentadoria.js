document.getElementById('btnCalcular').onclick = calculoAposentadoria;

function calculoAposentadoria() {
    const nome = document.getElementById('txtNome').value;
    const idade = parseFloat(document.getElementById('txtIdade').value);
    const masculino = document.getElementById('masculino').checked;
    const feminino = document.getElementById('feminino').checked;
    const contribuicao = parseFloat(document.getElementById('txtContribuicao').value);

    const calculo = idade + contribuicao;

    if (feminino && contribuicao >= 30 && calculo >= 85) {
        document.getElementById('formularioResultado').innerHTML += `
            <div class ='nome'>
            <b>${nome},</b> 
            <div class ='resultado'>
            você já pode se aposentar!`
         } else if (masculino && contribuicao >= 35 && calculo >= 95) {
            document.getElementById('formularioResultado').innerHTML += `
            <div class ='nome'>
            <b>${nome},</b> 
            <div class ='resultado'>
            você já pode se aposentar!`;
            } else {
                document.getElementById('formularioResultado').innerHTML += `
                <div class ='nome'>
                <b>${nome},</b> 
                <div class ='resultado'>
                você ainda não pode se aposentar!`;
    }

}
