function factorial(){
    let num=prompt("introduce un numero entero")
    num=parseInt(num)
    
    for (let i=num-1; i>0; i--){

        num*=i
    }
    return num
}
num=factorial()
alert("el factorial es: "+num)
