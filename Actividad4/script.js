function mostarMensaje(){
let mensaje=prompt("Introduce lo que quieras: ")

alert("Has escrito "+ mensaje)

}
mostarMensaje()


let sumar=function(num2=0,num3=0){
    return(num2+num3)
}
console.log(sumar(2,3));