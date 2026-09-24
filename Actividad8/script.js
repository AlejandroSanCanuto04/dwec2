function bucle1(){
    let notas=[0,4,6,7,9,10]
    let notaMedia=0;
    for(let i=0;i<notas.length;i++){
        notaMedia+=notas[i]

    }
    notaMedia=notaMedia/notas.length;
    console.log("la nota media con el primer bucle for es"+ notaMedia)

}

function bucle2(){
    let notas=[0,4,6,7,9,10]
    let notaMedia=0;
    let i=0;
    for( i in notas){
        notaMedia+=notas[i]
    }
    notaMedia=notaMedia/notas.length
    console.log("la nota media con el segundo bucle for es"+ notaMedia)
}

function bucle3(){
     let notas=[0,4,6,7,9,10]
    let notaMedia=0;
    for(let i of notas){
        notaMedia+=i;
        
    }
    
    notaMedia=notaMedia/notas.length
    console.log("la nota media con el tercer bucle for es"+ notaMedia)
}
bucle1()
bucle2()
bucle3()