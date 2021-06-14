import validator from './validator.js';

// ----- captura numeros del input y no acepta vacio -------//
let boton = document.getElementById('miBoton');
boton.addEventListener("click",captura);

function captura(){
    const numeros = document.getElementById('numCard').value;
    let numCondiciones = numeros.length;
    if(numCondiciones == 0){
        alert('Ingresa un numero');
        return false;
    }
    /*if(numCondiciones < 16){
        alert('Numero incompleto');
        return false;
    }*/
    const isValido = validator.isValid(numeros);
    if(isValido){
        document.getElementById('respValido').style.display = 'block';
    }else{
        document.getElementById('respNoValido').style.display = 'block';
    }
    const ocultar = validator.maskify(numeros);
    if(ocultar){
        document.getElementById("numCard").value = ocultar;
    }
}

// ----- el input solo acepta numeros-------//
const numCard = document.getElementById('numCard');
numCard.addEventListener("keypress", escribeNum);
function escribeNum(e){
    if (!soloNumeros(e)){
        e.preventDefault();
    }
    function soloNumeros(e){
        let key = e.charCode;
        return key >= 48 && key <= 57;
    }
}

/*console.log(validator);*/
