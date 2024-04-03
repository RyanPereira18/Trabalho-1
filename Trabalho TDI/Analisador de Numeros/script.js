let numbers = [];

function isNumberValid(number) {
    return !isNaN(number) && number >= 1 && number <= 100;
}

function isNumberInList(number) {
    return numbers.includes(number);
}

function addNumber() {
    let input = document.getElementById('numberInput');
    let number = parseInt(input.value);

    if (isNumberValid(number) && !isNumberInList(number)) {
        numbers.push(number);
        let select = document.getElementById('numberList');
        let option = document.createElement('option');
        option.text = number;
        select.add(option);
        input.value = '';
    } else {
        alert('Número inválido ou já adicionado.');
    }
}

function analyzeNumbers() {
    let sum = numbers.reduce((acc, curr) => acc + curr, 0);
    let average = sum / numbers.length;
    let max = Math.max(...numbers);
    let min = Math.min(...numbers);

    let result = document.getElementById('result');
    result.innerHTML = `<p>Total de números: ${numbers.length}</p>
                        <p>Soma: ${sum}</p>
                        <p>Média: ${average.toFixed(2)}</p>
                        <p>Maior número: ${max}</p>
                        <p>Menor número: ${min}</p>`;
}
