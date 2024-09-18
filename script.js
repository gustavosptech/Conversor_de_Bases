function converterDecimalParaOctal() {
    var decimal = Number(document.getElementById("input_valorDecimal").value);
    var octal = decimal.toString(8);
    document.getElementById("demo2").innerHTML = ` ${octal}`;
}

function converterDecimalParaHexa() {
    var decimal = Number(document.getElementById("input_valorDecimal").value);
    var hexadecimal = decimal.toString(16);
    document.getElementById("demo3").innerHTML = ` ${hexadecimal}`;
}

function converterDecimalParaBin() {
    var decimal = Number(document.getElementById("input_valorDecimal").value);
    var binaria = decimal.toString(2);
    document.getElementById("demo4").innerHTML = ` ${binaria}`; 
}

function converterOctalParaDecimal() {
    var octal = Number(document.getElementById("input_valorOctal").value);
    var decimal = octal.toString(10);

    if (octal == 8){
        document.getElementById("demo2").innerHTML = `ERRO. Octal não contêm o número 8`
    } else {
        document.getElementById("demo2").innerHTML = ` ${decimal}`
    }
}

function converterOctalParaHexadecimal() {
    var octal = Number(document.getElementById("input_valorOctal").value);
    var hexadecimal = octal.toString(16);
    
    if (octal == 8){
        document.getElementById("demo3").innerHTML = `ERRO. Octal não contêm o número 8`
    } else {
        document.getElementById("demo3").innerHTML = ` ${hexadecimal}`
    }
}

function converterOctalParaBin(){
    var octal = Number(document.getElementById("input_valorOctal").value);
    var bin = octal.toString(2);
    
    if (octal == 8){
        document.getElementById("demo4").innerHTML = `ERRO. Octal não contêm o número 8`
    } else {
        document.getElementById("demo4").innerHTML = ` ${bin}`
    }
}

function converterHexaParaDecimal() {
    var hexa = document.getElementById("input_valorHexa").value;
    var decimal = parseInt(hexa, 16); // Converte hexadecimal para decimal

    if (isNaN(decimal)) {
        document.getElementById("demo2").innerHTML = `ERRO. Digite um valor hexadecimal válido.`;
    } else {
        document.getElementById("demo2").innerHTML = `${decimal}`;
    }
}

function converterHexaParaOctal() {
    var hexa = document.getElementById("input_valorHexa").value;
    var decimal = parseInt(hexa, 16); // Converte hexadecimal para decimal
    var octal = decimal.toString(8); // Converte decimal para octal

    if (isNaN(decimal)) {
        document.getElementById("demo3").innerHTML = `ERRO. Digite um valor hexadecimal válido.`;
    } else {
        document.getElementById("demo3").innerHTML = `${octal}`;
    }
}

function converterHexaParaBin() {
    var hexa = document.getElementById("input_valorHexa").value;
    var decimal = parseInt(hexa, 16); // Converte hexadecimal para decimal
    var bin = decimal.toString(2); // Converte decimal para binário

    if (isNaN(decimal)) {
        document.getElementById("demo4").innerHTML = `ERRO. Digite um valor hexadecimal válido.`;
    } else {
        document.getElementById("demo4").innerHTML = `${bin}`;
    }
}

