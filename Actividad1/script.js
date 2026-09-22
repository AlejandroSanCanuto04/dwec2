let variable=42;

            console.log("derer");
            console.log(variable);
            let nums=[4,6,8,0,2,1]
            let num=notaMedia(nums)
            console.log(num)

    function notaMedia(arrayNotas) {
    let suma = 0;
    let totalNotas = 0;
    for (nota of arrayNotas) {
        suma += nota;
        totalNotas++;
    }
    return (suma / totalNotas).toFixed(1);
}