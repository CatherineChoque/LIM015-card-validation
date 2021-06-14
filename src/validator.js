//import { createConfigItem } from "@babel/core";

const validator = {
  isValid: function validar(n){
    let digitos = n.toString().split('').map(Number);//cadena, int

    digitos.reverse();//inverso
    console.log(digitos);

    /* multiplicando posicion par */
      digitos = digitos.map((digitos, i) =>{
      if(i%2 === 1){
        return digitos*2;
      }else{
        return digitos;
      }
    });

    console.log(digitos);

    /* sumando digitos de pares */
    let digitosPar = digitos.map((digitos) =>{
      if(digitos > 9){
        return digitos - 9;
      }else{
        return digitos;
      }
    });

    /* sumando todos los digitos */
    const totalSum = digitosPar.reduce((acc, digitosPar) => acc = acc + digitosPar, 0);

    console.log(digitosPar);
    console.log(totalSum);
    console.log(n);

    /* valido o invalido */
    return totalSum % 10 === 0;  
  },

  maskify: function mostrar(nu){
   let numOculto = nu.split('').map((letter, i) => i < nu.length - 4 ? '#' : letter).join('');
   return numOculto;
  }
};

//console.log(validator);

export default validator;
