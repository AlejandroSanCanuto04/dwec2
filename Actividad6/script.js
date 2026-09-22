function adivinarNum(){
    let num=Math.floor(Math.random() *12)+1
    let num2=0;
   
   while(num!=num2){
    
        let num2= prompt("introduce un numero entre el 0 y 12")

   
    
    if(num2!=num){
    alert("no es el mismo numero")
    }
    if(num2==num){
    alert("enhorabuena has acertado")
    break;
    }

    
   }
   
}
adivinarNum()