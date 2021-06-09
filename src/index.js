import validator from './validator.js';

// -----  numeros en consola y no acmi boton imprime losepta vacio -------//
let boton = document.getElementById('miBoton');

boton.addEventListener("click",captura);

function captura(){
    let numeros = document.getElementById('numCard').value;
    let numCondiciones = numeros.length;
    if(numCondiciones == 0 && numCondiciones < 9){
        alert('Ingresa un numero');
        return false;
    }
    if(numCondiciones < 9){
        alert('Numero incompleto');
        return false;
    }
    validator.isValid();
}

// ----- el input solo acepta numeros-------//
numCard.addEventListener("keypress", escribeNum);
let arr = [];

function escribeNum(e){

    if (!soloNumeros(e)){
        e.preventDefault();
    }

    function soloNumeros(e){
        let key = e.charCode;
        arr.push(key);
        
        if(arr.length < 9 ){
            console.log(arr);
        }
        return key >= 48 && key <= 57;
    }
}

/*console.log(validator);*/
