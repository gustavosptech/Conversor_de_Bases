let selectedBase = 'dec';
let currentValue = 0;
let lastValue = 0;
let pendingOperation = '';

function convertAndDisplay() {
    const inputValue = document.getElementById('input-value').value.trim();

    // Verifica se o valor é válido
    if (!inputValue) {
        clearDisplay();
        return;
    }

    if (selectedBase === 'dec') {
        currentValue = Number(inputValue);
    } else if (selectedBase === 'bin') {
        currentValue = parseInt(inputValue, 2);
    } else if (selectedBase === 'oct') {
        currentValue = parseInt(inputValue, 8);
    } else if (selectedBase === 'hex') {
        currentValue = parseInt(inputValue, 16);
    } else {
        alert('Base inválida');
        return;
    }

    if (isNaN(currentValue)) {
        alert('Insira um valor válido na base selecionada.');
        clearDisplay();
        return;
    }

    updateDisplay(currentValue);
}


function performOperation(event) {
    const operation = event.target.getAttribute("data-op");

    if (pendingOperation !== '') {
        performResult();
    }

    lastValue = currentValue;
    pendingOperation = operation;
    document.getElementById('input-value').value = '';
}

function performResult() {
    if (!pendingOperation || (lastValue === 0 && currentValue === 0)) {
        alert('Nenhuma operação para realizar.');
        return;
    }

    let result;

    if (pendingOperation === "add") {
        result = lastValue + currentValue;
    } else if (pendingOperation === "subtract") {
        result = lastValue - currentValue;
    } else if (pendingOperation === "multiply") {
        result = lastValue * currentValue;
    } else if (pendingOperation === "divide") {
        if (currentValue === 0) {
            alert('Divisão por zero não é permitida!');
            return;
        }
        result = lastValue / currentValue;
    } else {
        return;
    }

    lastValue = result;
    currentValue = result;
    pendingOperation = '';
    updateDisplay(result);
}


function updateDisplay(value) {
    document.getElementById('dec-value').innerText = value.toString(10);
    document.getElementById('bin-value').innerText = Math.floor(value).toString(2);
    document.getElementById('oct-value').innerText = Math.floor(value).toString(8);
    document.getElementById('hex-value').innerText = Math.floor(value).toString(16).toUpperCase();
}

function clearAll() {
    document.getElementById('input-value').value = '';
    clearDisplay();
    currentValue = 0;
    lastValue = 0;
    pendingOperation = '';
}

function clearDisplay() {
    document.getElementById('hex-value').innerText = '0';
    document.getElementById('dec-value').innerText = '0';
    document.getElementById('oct-value').innerText = '0';
    document.getElementById('bin-value').innerText = '0';
}

// Event Listeners para os botões de bases
document.getElementById("btn_decimal").addEventListener('click', () => setBase('dec'));
document.getElementById("btn_binario").addEventListener('click', () => setBase('bin'));
document.getElementById("btn_octal").addEventListener('click', () => setBase('oct'));
document.getElementById("btn_hexadecimal").addEventListener('click', () => setBase('hex'));

function setBase(base) {
    selectedBase = base;
    clearAll();
}

const btnAscii = document.getElementById("btn_ascii");

btnAscii.addEventListener('click', () => {
    idDecimal.classList.add("visible");
    idBinario.classList.remove("visible");
    idOctal.classList.remove("visible");
    idHexadecimal.classList.remove("visible");
    apagarConteudoDaDiv()
});

// Seletor para os containers da calculadora e do conversor ASCII
const container2 = document.querySelector('.container2');
const asciiConverter = document.getElementById('ascii-converter');
const divOutput = document.getElementById('ascii-output');
const inputAscii = document.getElementById('input-ascii');

// Função para esconder a calculadora e mostrar o conversor ASCII
document.getElementById("btn_ascii").addEventListener('click', () => {
    container2.classList.add('hidden'); // Oculta a calculadora
    asciiConverter.classList.remove('hidden'); // Mostra o conversor ASCII
});

// Função para converter o caractere ASCII
function converterCaracter() {
    const caractere = inputAscii.value;

    // Limpa o output anterior
    divOutput.innerHTML = '';

    // Se o input não tiver caractere, não faz nada
    if (!caractere) {
        return;
    }

    const decimal = caractere.charCodeAt(0); // Obtém o código decimal do caractere

    // Exibe os valores em decimal, binário e hexadecimal
    divOutput.style.display = 'block';
    divOutput.innerHTML += `<b>Decimal:</b> ${decimal}<br>`;
    divOutput.innerHTML += `<b>Binário:</b> ${decimal.toString(2)}<br>`;
    divOutput.innerHTML += `<b>Hexadecimal:</b> ${decimal.toString(16).toUpperCase()}<br>`;
}

// Função para voltar ao modo da calculadora ao selecionar uma base
function setBase(base) {
    selectedBase = base;
    clearAll();

    // Remove a classe 'selected' de todos os botões de base
    document.getElementById("btn_decimal").classList.remove('selected');
    document.getElementById("btn_binario").classList.remove('selected');
    document.getElementById("btn_octal").classList.remove('selected');
    document.getElementById("btn_hexadecimal").classList.remove('selected');
    document.getElementById("btn_ascii").classList.remove('selected');

    if (base === 'dec') {
        document.getElementById("btn_decimal").classList.add('selected');
    } else if (base === 'bin') {
        document.getElementById("btn_binario").classList.add('selected');
    } else if (base === 'oct') {
        document.getElementById("btn_octal").classList.add('selected');
    } else if (base === 'hex') {
        document.getElementById("btn_hexadecimal").classList.add('selected');
    } else if (base === 'ascii') {
        document.getElementById("btn_ascii").classList.add('selected');
    }

    // Volta a mostrar a calculadora ao selecionar uma base (exceto para ASCII)
    if (base !== 'ascii') {
        container2.classList.remove('hidden'); // Mostra a calculadora novamente
        asciiConverter.classList.add('hidden'); // Oculta o conversor ASCII
    }
}


// Atualiza o comportamento dos botões de base para reexibir a calculadora
document.getElementById("btn_decimal").addEventListener('click', () => setBase('dec'));
document.getElementById("btn_binario").addEventListener('click', () => setBase('bin'));
document.getElementById("btn_octal").addEventListener('click', () => setBase('oct'));
document.getElementById("btn_hexadecimal").addEventListener('click', () => setBase('hex'));

// Atualiza o evento do botão ASCII para incluir a classe 'selected'
document.getElementById("btn_ascii").addEventListener('click', () => {
    container2.classList.add('hidden'); // Oculta a calculadora
    asciiConverter.classList.remove('hidden'); // Mostra o conversor ASCII
    setBase('ascii'); // Define o ASCII como a base selecionada
});

// Função para converter o caractere ASCII
function converterCaracter() {
    const caractere = inputAscii.value;

    // Limpa o output anterior
    divOutput.innerHTML = '';

    // Se o input não tiver caractere, não faz nada
    if (!caractere) {
        return;
    }

    const decimal = caractere.charCodeAt(0); // Obtém o código decimal do caractere

    // Exibe os valores em decimal, binário e hexadecimal
    divOutput.style.display = 'block';
    divOutput.innerHTML += `<b>Decimal:</b> ${decimal}<br>`;
    divOutput.innerHTML += `<b>Binário:</b> ${decimal.toString(2)}<br>`;
    divOutput.innerHTML += `<b>Hexadecimal:</b> ${decimal.toString(16).toUpperCase()}<br>`;
}
