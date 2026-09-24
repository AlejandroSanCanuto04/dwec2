
console.log(comprobarDni("24444051l"))

function comprobarDni(dni){

    let letra=dni.charAt(8).toLocaleUpperCase();
    
    let numero=dni.substring(0,8);
    let resu=numero%23;
    let letras="TRWAGMYFPDXBNJZSQVHLCKE";
    let letra2= letras.charAt(resu);

    if(letra2==letra){
        return "El dni es correcto"
    }
    else{
        return "El dni es falso"
    }
}