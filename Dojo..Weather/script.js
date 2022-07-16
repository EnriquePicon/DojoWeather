function alerta(ciudad) {
    alert("Cargando informe meteorológico…”" +ciudad);
}


function aceptar() {
    var cookie = document.querySelector(".cookies");
    cookie.remove();
}


// Funcion Cambio de FaCELCIUS

function cambiatemperatura(elementoSelect) {
    var FoC = elementoSelect.value;
    console.log(FoC);

    for(var i=1; i<=8; i++) {
        var elementoTemperatura = document.querySelector('#temperatura'+i);
        var temperatura = elementoTemperatura.innerText;
        temperatura = parseInt(temperatura);
        console.log(temperatura);
        var newTemp = 0;
        if(FoC === "C") {
            //F -> C
            newTemp = Math.round((temperatura - 32) * 5 / 9);
        } else {
            //C -> F
            newTemp = Math.round((temperatura * 9 / 5) + 32);
        }
        elementoTemperatura.innerText = newTemp;
    }


} 





