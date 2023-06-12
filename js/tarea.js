//1
function meses (){
    let meses = ["Enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
    
    for(let i = 0; i < meses.length; i++) {
        console.log(meses[i]);
    }
    }
    
//2
function Ejercicio2(){
    var valores = [true, 5, false, "hola", "adios",2,"gjdjdflk"];
    var valores = 0;
    var posicion= "";

    for (let i = 0; i < valores.length; i++){
        if (typeof(valores[i]) == "string"){
            if (aux[i].length > aux[i+1].length && i+1 < aux.length) {
                posicion = i;
                valor = aux[i];
            } else {
                posicion = i +1;
                valor = aux[i + 1];
            }
            }
        }
    }

    console.log("el mayor es "+valor);

    //comparacion directa
if (valores[3].length > valores[4].length) {
    console.log("hola es mayor");
}else{
    console.log("adios es mayor")
}

//3
function Ejercicio3() {
var numero1 = 5;
var numero2 = 8;
if(numero1 < numero2) {
console.log("numero1 no es mayor que numero2");
}
if(numero2 > 0) {
console.log("numero2 es positivo");
}
if(numero1 < 0 || numero1 != 0) {
console.log("numero1 es negativo o distinto de cero");
}
numero1 = numero1 + 1;
if(numero2 > numero1) {
console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}
}



//6
function determinarParidad(numero) {
    if (numero % 2 === 0) {
      return "El número es par.";
    } else {
      return "El número es impar.";
    }
  }
  
  var numero = 7;
  var resultado = determinarParidad(numero);
  console.log(resultado);


  //7
  function determinarTipoCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
      return "La cadena está formada solo por mayúsculas.";
    } else if (cadena === cadena.toLowerCase()) {
      return "La cadena está formada solo por minúsculas.";
    } else {
      return "La cadena está formada por una mezcla de mayúsculas y minúsculas.";
    }
  }
  
  var texto = "Hola Mundo";
  var resultado = determinarTipoCadena(texto);
  console.log(resultado);


  //8
  function esPalindromo(cadena) {
    // Eliminamos los espacios en blanco y convertimos todo a minúsculas
    var cadenaSinEspacios = cadena.replace(/\s/g, "").toLowerCase();
    
    // Invertimos la cadena
    var cadenaInvertida = cadenaSinEspacios.split("").reverse().join("");
    
    // Comparamos la cadena original con la cadena invertida
    if (cadenaSinEspacios === cadenaInvertida) {
      return "La cadena es un palíndromo.";
    } else {
      return "La cadena no es un palíndromo.";
    }
  }
  
  var texto = "La ruta nos aporto otro paso natural";
  var resultado = esPalindromo(texto);
  console.log(resultado);



  //9
  
  
  
