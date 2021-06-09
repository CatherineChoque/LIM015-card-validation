

const validator = {
  isValid: function(){
    let numerosTarjeta = document.getElementById('numCard').value;

    let digitos = numerosTarjeta.toString().split('').map(Number);//numeros en cadena, pasado de string a int

    digitos.reverse();//mostrarlos en orden inverso un arreglo
    //console.log(digitos);

    /* esta multiplicando a los numeros de posicion par */
    if(digitos.length % 2 === 0){
      digitos = digitos.map((digitos, i) => i%2 === 0 ? digitos * 2 : digitos);
    }else{
      digitos = digitos.map((digitos, i) => i%2 === 1 ? digitos * 2 : digitos);
    }
    //console.log(digitos);

    /* sumando los digitos de los pares */
    digitos = digitos.map(digitos => digitos > 9 ? digitos -9 : digitos);

    /* sumando los digitos */
    const sum = digitos.reduce((acc, digitos) => acc += digitos, 0);

    /* condicional si el residuo es igual a 0 es valido sino invalido */
    if(sum % 10 == 0){
      document.getElementById('respValido').style.display = 'block';
    }else{
      document.getElementById('respNoValido').style.display = 'block';
    }
    
    //console.log(digitos);
    //console.log(sum);
    //console.log(numerosTarjeta);
  }
};

//console.log(validator);

export default validator;
