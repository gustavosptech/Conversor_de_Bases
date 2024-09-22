function converterDecimalParaOctal() {
    var decimal = Number(document.getElementById("input_valorDecimal").value)
    var octal = decimal.toString(8)
    document.getElementById("decimal_octal").innerHTML = octal
}

function converterDecimalParaHexa() {
    var decimal = Number(document.getElementById("input_valorDecimal").value)
    var hexa = decimal.toString(16).toUpperCase()
    document.getElementById("decimal_hexadecimal").innerHTML = hexa
}

function converterDecimalParaBin() {
    var decimal = Number(document.getElementById("input_valorDecimal").value)
    var binaria = decimal.toString(2)
    document.getElementById("decimal_binario").innerHTML = binaria
}

function converterOctalParaDecimal() {
    var octal = Number(document.getElementById("input_valorOctal").value)
    var decimal = parseInt(octal, 8);

    // /^[8]+$/.test(octal) testa para ver se no input contém o número 8

    if (/^[01234567]+$/.test(octal)) {
        document.getElementById("octal_decimal").innerHTML = decimal
    } else {
        document.getElementById("octal_decimal").innerHTML = `ERRO. Octal não contêm o número 8 ou 9`
    }
}

function converterOctalParaHexadecimal() {
    var octal = Number(document.getElementById("input_valorOctal").value)
    var decimal = parseInt(octal, 8);
    var hexa = decimal.toString(16).toLocaleUpperCase();

    if (/^[8-9]+$/.test(octal)) {
        document.getElementById("octal_hexadecimal").innerHTML = `ERRO. Octal não contêm o número 8 ou 9`
    } else {
        document.getElementById("octal_hexadecimal").innerHTML = hexa
    }
}

function converterOctalParaBin() {
    var octal = Number(document.getElementById("input_valorOctal").value)
    var decimal = parseInt(octal, 8);
    var bin = decimal.toString(2);

    if (/^[8-9]+$/.test(octal)) {
        document.getElementById("octal_binario").innerHTML = `ERRO. Octal não contêm o número 8 ou 9`
    } else {
        document.getElementById("octal_binario").innerHTML = bin
    }
}

function converterHexaParaDecimal() {
    var hexa = document.getElementById("input_valorHexa").value
    var decimal = parseInt(hexa, 16) // Converte hexadecimal para decimal, parseInt permite números inteiros 1 até 9 e texto A até F

    if ((/^[0123456789ABCDEF]+$/.test(hexa))) {
        document.getElementById("hexadecimal_decimal").innerHTML = decimal
    } else {
        document.getElementById("hexadecimal_decimal").innerHTML = `ERRO. Digite um valor hexadecimal válido.`
    }
}

function converterHexaParaOctal() {
    var hexa = document.getElementById("input_valorHexa").value
    var decimal = parseInt(hexa, 16) // Converte hexadecimal para decimal
    var octal = decimal.toString(8) // Converte decimal para octal

    if ((/^[0123456789ABCDEF]+$/.test(hexa))) {
        document.getElementById("hexadecimal_octal").innerHTML = octal
    } else {
        document.getElementById("hexadecimal_octal").innerHTML = `ERRO. Digite um valor hexadecimal válido.`
    }
}

function converterHexaParaBin() {
    var hexa = document.getElementById("input_valorHexa").value
    var decimal = parseInt(hexa, 16)
    var bin = decimal.toString(2)

    if ((/^[0123456789ABCDEF]+$/.test(hexa))) {
        document.getElementById("hexadecimal_binario").innerHTML = bin
    } else {
        document.getElementById("hexadecimal_binario").innerHTML = `ERRO. Digite um valor hexadecimal válido.`
    }
}

function converterBinarioParaDecimal() {
    var bin = document.getElementById("input_valorBinario").value
    var decimal = parseInt(bin, 2)

    // /^[01]+$/.test(bin) -- testa se no input contém os núemeros 0 e 1

    if (/^[01]+$/.test(bin)) {
        document.getElementById("binario_decimal").innerHTML = decimal
    } else {
        document.getElementById("binario_decimal").innerHTML = `ERRO. Digite um valor binário válido.`
    }
}


function converterBinarioParaOctal() {
    var bin = document.getElementById("input_valorBinario").value
    var decimal = parseInt(bin, 2)
    var octal = decimal.toString(8)

    if (/^[01]+$/.test(bin)) {
        document.getElementById("binario_octal").innerHTML = octal
    } else {
        document.getElementById("binario_octal").innerHTML = `ERRO. Digite um valor binário válido.`
    }
}

function converterBinarioParaHexa() {
    var bin = document.getElementById("input_valorBinario").value
    var decimal = parseInt(bin, 2)
    var hexa = decimal.toString(16).toLocaleUpperCase()

    if (/^[01]+$/.test(bin)) {
        document.getElementById("binario_hexadecimal").innerHTML = hexa
    } else {
        document.getElementById("binario_hexadecimal").innerHTML = `ERRO. Digite um valor binário válido.`
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

function apagarConteudoDaDiv() {
    const divs = document.getElementsByClassName("apagar");

    for (let i = 0; i < divs.length; i++) {
        const element = divs[i];
        element.innerHTML = "";
    }
}