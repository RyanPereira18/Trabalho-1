function calcular(operacao) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado;

    switch (operacao) {
        case 'soma':
            resultado = num1 + num2;
            break;
        case 'subtracao':
            resultado = num1 - num2;
            break;
        case 'multiplicacao':
            resultado = num1 * num2;
            break;
        case 'divisao':
            if (num2 === 0) {
                alert('Não é possível dividir por zero.');
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            alert('Operação inválida.');
            return;
    }

    document.getElementById('resultado').textContent = resultado.toFixed(2);
}
