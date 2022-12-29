let areaTexto = document.getElementById('areaTexto').value;

function criptografar(){
    let texto = document.getElementById("texto").value;
    let resultado = texto.toString().replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.getElementById("areaTexto").innerHTML = resultado;
    areaTexto = resultado;
}


function descriptografar(){
    let texto = document.getElementById("texto").value;
    let resultado = texto.toString().replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.getElementById("areaTexto").innerHTML = resultado;
    areaTexto = resultado;
}

function copiar(){
    navigator.clipboard.writeText(areaTexto);
}

