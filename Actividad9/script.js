function bucle1(){
    let notas=[0,4,6,7,9,10,12]
    let notaMedia=0;
    for(let i=0;i<notas.length;i++){
        notaMedia+=notas[i]
        if(notas[i]<0 || notas[i]>10){
            throw "el numero " + notas[i]+ " no es valido"

    }

   
    }
     notaMedia=notaMedia/notas.length;
    console.log("la nota media con el primer bucle for es"+ notaMedia)
}
try{
bucle1()
}catch(err){
    console.log(err)
}
