
let num=3;

let numero=cubo(num);
console.log(numero)


function cubo(numero) {
    if(!Number.isInteger(num) ) {
        if(!Number.isInteger(num)){
            alert("El numero "+ numero +" no es entero")
        }
        else{
            alert("Eso "+ numero + " no es un numero")
        }
   return false;

    }
    let resultado = numero * numero * numero;
    return resultado;
}