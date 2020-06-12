document.getElementById('btnCalcular').onclick = imc;

function imc() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    let resultado = peso/(altura*altura);

    resultado = resultado.toFixed(2); 

    if (isNaN(peso) || isNaN(altura)) {
        document.getElementById('formularioResultado').innerHTML += `
            <br/>
            <br/>
            <br/>
            <br/>
            <div class ='alerta'>
            <b>Insira as informações solicitadas ao lado.</b>`
    } else if (resultado < 19){
        document.getElementById('formularioResultado').innerHTML += `
            <div class ='resultado'>
            <br/>   
            <b>Resultado:</b>
            <br/>
            <br/>
            <div class ='imc'>
            <h3>${resultado}</h3>
            <div class ='observacao'>
            <b> Abaixo do peso </b>
        </div>`
        } else if (resultado >= 19 && resultado <25){
            document.getElementById('formularioResultado').innerHTML += `
                <div class ='resultado'>
                <br/>
                <b>Resultado:</b>
                <br/>
                <br/>
                <div class ='imc'>
                <h3>${resultado}</h3>
                <div class ='observacao'>
                <b> Peso Ideal </b>
            </div>`
            } else if (resultado >= 25 && resultado <30){
                document.getElementById('formularioResultado').innerHTML += `
                    <div class ='resultado'>
                    <br/>
                    <b>Resultado:</b>
                    <br/>
                    <br/>
                    <div class ='imc'>
                    <h3>${resultado}</h3>
                    <div class ='observacao'>
                    <b> Sobrepeso </b>
                </div>`
                } else if (resultado >= 30 && resultado <40){
                    document.getElementById('formularioResultado').innerHTML += `
                        <div class ='resultado'>
                        <br/>
                        <b>Resultado:</b>
                        <br/>
                        <br/>
                        <div class ='imc'>
                        <h3>${resultado}</h3>
                        <div class ='observacao'>
                        <b> Obesidade do Tipo I </b>
                    </div>`
                    } else if (resultado >= 40){
                        document.getElementById('formularioResultado').innerHTML += `
                            <div class ='resultado'>
                            <br/>
                            <b>Resultado:</b>
                            <br/>
                            <br/>
                            <div class ='imc'>
                            <h3>${resultado}</h3>
                            <div class ='observacao'>
                            <b> Obesidade Mórbida </b>
                        </div>`
                    }
}
    

