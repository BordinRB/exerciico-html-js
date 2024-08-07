document.getElementById('form-comparacao').addEventListener('submit', function(e){
    e.preventDefault();

    const classeA = document.getElementById('classeA').value;
    const classeB = document.getElementById('classeB').value;

    let resultMessage;
    if(classeB <= classeA){
        resultMessage = 'Valores definidos incorretamente!';
    } else {
        resultMessage = 'Valores definidos corretamente!';
    }

    document.getElementById('result').textContent = resultMessage;
})

