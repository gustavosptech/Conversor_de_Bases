function converterDecimalParaOctal() {
    var decimal = Number(document.getElementById("input_valorDecimal").value)
    var octal = decimal.toString(8)
    document.getElementById("demo2").innerHTML = octal
}

function converterDecimalParaHexa() {
    var decimal = Number(document.getElementById("input_valorDecimal").value)
    var hexa = decimal.toString(16).toUpperCase()
    document.getElementById("demo3").innerHTML = hexa
}

function converterDecimalParaBin() {
    var decimal = Number(document.getElementById("input_valorDecimal").value)
    var binaria = decimal.toString(2)
    document.getElementById("demo4").innerHTML = binaria
}

function converterOctalParaDecimal() {
    var octal = Number(document.getElementById("input_valorOctal").value)
    var decimal = octal.toString(10)

    // /^[8]+$/.test(octal) testa para ver se no input contém o número 8

    if (/^[8]+$/.test(octal)) {
        document.getElementById("demo2").innerHTML = `ERRO. Octal não contêm o número 8`
    } else {
        document.getElementById("demo2").innerHTML = decimal
    }
}

function converterOctalParaHexadecimal() {
    var octal = Number(document.getElementById("input_valorOctal").value)
    var hexa = octal.toString(16).toLocaleUpperCase()

    if (/^[8]+$/.test(octal)) {
        document.getElementById("demo3").innerHTML = `ERRO. Octal não contêm o número 8`
    } else {
        document.getElementById("demo3").innerHTML = hexa
    }
}

function converterOctalParaBin() {
    var octal = Number(document.getElementById("input_valorOctal").value)
    var bin = octal.toString(2)

    if (/^[8]+$/.test(octal)) {
        document.getElementById("demo4").innerHTML = `ERRO. Octal não contêm o número 8`
    } else {
        document.getElementById("demo4").innerHTML = bin
    }
}

function converterHexaParaDecimal() {
    var hexa = document.getElementById("input_valorHexa").value
    var decimal = parseInt(hexa, 16) // Converte hexadecimal para decimal, parseInt permite números inteiros 1 até 9 e texto A até F

    if ((/^[0123456789ABCDEF]+$/.test(hexa))) {
        document.getElementById("demo2").innerHTML = decimal
    } else {
        document.getElementById("demo2").innerHTML = `ERRO. Digite um valor hexadecimal válido.`
    }
}

function converterHexaParaOctal() {
    var hexa = document.getElementById("input_valorHexa").value
    var decimal = parseInt(hexa, 16) // Converte hexadecimal para decimal
    var octal = decimal.toString(8) // Converte decimal para octal

    if ((/^[0123456789ABCDEF]+$/.test(hexa))) {
        document.getElementById("demo3").innerHTML = octal
    } else {
        document.getElementById("demo3").innerHTML = `ERRO. Digite um valor hexadecimal válido.`
    }
}

function converterHexaParaBin() {
    var hexa = document.getElementById("input_valorHexa").value
    var decimal = parseInt(hexa, 16)
    var bin = decimal.toString(2)

    if ((/^[0123456789ABCDEF]+$/.test(hexa))) {
        document.getElementById("demo4").innerHTML = bin
    } else {
        document.getElementById("demo4").innerHTML = `ERRO. Digite um valor hexadecimal válido.`
    }
}

function converterBinarioParaDecimal() {
    var bin = document.getElementById("input_valorBinario").value
    var decimal = parseInt(bin, 2)

    // /^[01]+$/.test(bin) -- testa se no input contém os núemeros 0 e 1

    if (/^[01]+$/.test(bin)) {
        document.getElementById("demo2").innerHTML = decimal
    } else {
        document.getElementById("demo2").innerHTML = `ERRO. Digite um valor binário válido.`
    }
}


function converterBinarioParaOctal() {
    var bin = document.getElementById("input_valorBinario").value
    var decimal = parseInt(bin, 2)
    var octal = decimal.toString(8)

    if (/^[01]+$/.test(bin)) {
        document.getElementById("demo3").innerHTML = octal
    } else {
        document.getElementById("demo3").innerHTML = `ERRO. Digite um valor binário válido.`
    }
}

function converterBinarioParaHexa() {
    var bin = document.getElementById("input_valorBinario").value
    var decimal = parseInt(bin, 2)
    var hexa = decimal.toString(16).toLocaleUpperCase()

    if (/^[01]+$/.test(bin)) {
        document.getElementById("demo4").innerHTML = hexa
    } else {
        document.getElementById("demo4").innerHTML = `ERRO. Digite um valor binário válido.`
    }
}

