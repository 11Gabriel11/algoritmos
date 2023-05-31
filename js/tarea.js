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



