function converterDecimal() {
    const valorDecimal = document.getElementById("input_valorDecimal").value;

    if (valorDecimal === '') {
        // Limpa os resultados se o campo estiver vazio
        document.getElementById("decimal_binario").textContent = '';
        document.getElementById("decimal_octal").textContent = '';
        document.getElementById("decimal_hexadecimal").textContent = '';
        document.getElementById("resultado_erro_decimal").textContent = '';
        return;
    }


    if (/^[0-9]+$/.test(valorDecimal)) {
        const decimal = parseInt(valorDecimal);
    
        const binario = decimal.toString(2);
        document.getElementById("decimal_binario").textContent = binario;

        const octal = decimal.toString(8);
        document.getElementById("decimal_octal").textContent = octal;

        const hexadecimal = decimal.toString(16).toUpperCase();
        document.getElementById("decimal_hexadecimal").textContent = hexadecimal;

        document.getElementById("resultado_erro_decimal").textContent = '';
        
    } else {
        document.getElementById("resultado_erro_decimal").textContent = 'ERRO!! Digite apenas números!';
        document.getElementById("decimal_binario").textContent = '';
        document.getElementById("decimal_octal").textContent = '';
        document.getElementById("decimal_hexadecimal").textContent = '';
    }
    
}


function converterOctal() {
    const valorOctal = document.getElementById("input_valorOctal").value;


    if (valorOctal === '') {
        document.getElementById("octal_decimal").textContent = '';
        document.getElementById("octal_binario").textContent = '';
        document.getElementById("octal_hexadecimal").textContent = '';
        document.getElementById("resultado_erro_octal").textContent = '';
        return;
    }

    if (/^[0-7]+$/.test(valorOctal)) {

        const decimal = parseInt(valorOctal, 8);
        document.getElementById("octal_decimal").textContent = decimal;


        const binario = decimal.toString(2);
        document.getElementById("octal_binario").textContent = binario;


        const hexadecimal = decimal.toString(16).toUpperCase();
        document.getElementById("octal_hexadecimal").textContent = hexadecimal;


        document.getElementById("resultado_erro_octal").textContent = '';
    } else {
        document.getElementById("resultado_erro_octal").textContent = `ERRO!! Octal não contêm o número 8 ou 9!`;
        document.getElementById("octal_decimal").textContent = '';
        document.getElementById("octal_binario").textContent = '';
        document.getElementById("octal_hexadecimal").textContent = '';
    }
}

function converterHexadecimal() {
    const valorHexadecimal = document.getElementById("input_valorHexadecimal").value;


    if (valorHexadecimal === '') {
        document.getElementById("hexadecimal_decimal").textContent = '';
        document.getElementById("hexadecimal_binario").textContent = '';
        document.getElementById("hexadecimal_octal").textContent = '';
        document.getElementById("resultado_erro_hexadecimal").textContent = '';
        return;
    }

    // /^[0-9A-Fa-f]+$/.test(hexa) -- testa se o input possui número de 1 a 9 e é case sensitive de A até F

    if (/^[0-9A-Fa-f]+$/.test(valorHexadecimal)) {

        const decimal = parseInt(valorHexadecimal, 16);
        document.getElementById("hexadecimal_decimal").textContent = decimal;


        const binario = decimal.toString(2);
        document.getElementById("hexadecimal_binario").textContent = binario;


        const octal = decimal.toString(8);
        document.getElementById("hexadecimal_octal").textContent = octal;

        document.getElementById("resultado_erro_hexadecimal").textContent = '';

    } else {
        document.getElementById("resultado_erro_hexadecimal").textContent = `ERRO!! Hexadecimal são números de 1 até 9 e A até F!`;
        document.getElementById("hexadecimal_decimal").textContent = '';
        document.getElementById("hexadecimal_binario").textContent = '';
        document.getElementById("hexadecimal_octal").textContent = '';
    }
}

function converterBinario() {
    const valorBinario = document.getElementById("input_valorBinario").value;


    if (valorBinario === '') {
        document.getElementById("binario_decimal").textContent = '';
        document.getElementById("binario_hexadecimal").textContent = '';
        document.getElementById("binario_octal").textContent = '';
        document.getElementById("resultado_erro_binario").textContent = '';
        return;
    }

    // /^[01]+$/.test(bin) -- testa se no input contém os núemeros 0 e 1

    if (/^[0-1]+$/.test(valorBinario)) {

        const decimal = parseInt(valorBinario, 2);
        document.getElementById("binario_decimal").textContent = decimal;


        const hexadecimal = decimal.toString(16).toUpperCase();
        document.getElementById("binario_hexadecimal").textContent = hexadecimal;


        const octal = decimal.toString(8).toUpperCase();
        document.getElementById("binario_octal").textContent = octal;

        document.getElementById("resultado_erro_binario").textContent = '';

    } else {
        document.getElementById("resultado_erro_binario").textContent = `ERRO!! binario são números de 0 até 1!`;
        document.getElementById("binario_decimal").textContent = '';
        document.getElementById("binario_hexadecimal").textContent = '';
        document.getElementById("binario_octal").textContent = '';
    }
}

// Botão de mudança de bases:

const btnDecimal = document.getElementById("btn_decimal");
const btnBinario = document.getElementById("btn_binario");
const btnOctal = document.getElementById("btn_octal");
const btnHexadecimal = document.getElementById("btn_hexadecimal");
const idDecimal = document.getElementById("decimal");
const idBinario = document.getElementById("binario");
const idOctal = document.getElementById("octal");
const idHexadecimal = document.getElementById("hexadecimal");


btnDecimal.addEventListener('click', () => {
    idDecimal.classList.add("visible");
    idBinario.classList.remove("visible");
    idOctal.classList.remove("visible");
    idHexadecimal.classList.remove("visible");
    apagarConteudoDaDiv()
});

btnBinario.addEventListener('click', () => {
    idDecimal.classList.remove("visible");
    idBinario.classList.add("visible");
    idOctal.classList.remove("visible");
    idHexadecimal.classList.remove("visible");
    apagarConteudoDaDiv()
});

btnOctal.addEventListener('click', () => {
    idDecimal.classList.remove("visible");
    idBinario.classList.remove("visible");
    idOctal.classList.add("visible");
    idHexadecimal.classList.remove("visible");
    apagarConteudoDaDiv()
});

btnHexadecimal.addEventListener('click', () => {
    idDecimal.classList.remove("visible");
    idBinario.classList.remove("visible");
    idOctal.classList.remove("visible");
    idHexadecimal.classList.add("visible");
    apagarConteudoDaDiv()
});