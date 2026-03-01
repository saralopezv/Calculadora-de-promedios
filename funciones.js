console.log("esta conectado el JS")


document.getElementById("calcular promedio").addEventListener("click", calcularpromedio);

function calcularpromedio() {
    prom=(nota1+nota2+nota3)/3;
     let nota1 = document.getElementById('ingresa nota 1').value; //
     let nota2 = document.getElementById('ingresa nota 2').value; //
     let nota3 = document.getElementById('ingresa nota 3').value; //

    let promedio = 0;
    let caracteristica = "";
    let mensaje = "";


    promedio = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;

    if(promedio < 2.5){
        caracteristica="REPROBADO, es importante que estudies más para poder aprobar";
        imagen = "img/bajopeso.jpg"

    }else if (promedio >= 2.5 && promedio < 3) {
        caracteristica="NECESITAS HABILITAR, es importante que estudies más para poder aprobar";
        imagen = "img/normal.jpg"

    }else if (promedio >= 3 && promedio <= 5) {
        caracteristica="APROBADO, es importante que sigas estudiando para mantener tu promedio";
        imagen = "img/sobrepeso.jpg"


    console.log("su caracteristica es: "+caracteristica + " su resultado promedio:"+promedio);

    document.getElementById("valorPromedio").textContent = promedio.toFixed(2);
    document.getElementById("categoriaPromedio").textContent = caracteristica;
    document.getElementById("imagenPromedio").src = imagen;
}
}
alert("hola, esta es una calculadora de promedio, puedes ingresar tus tres notas para conocer tu promedio")
