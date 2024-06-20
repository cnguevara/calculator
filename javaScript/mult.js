/*Función mult()*/
function mult(num1, num2) {
    //Obtenemos el valor de los inputs y los transformamos a valor decimal
    num1 = document.getElementById("num1").value;
    num1 = parseFloat(num1);
    num2 = document.getElementById("num2").value;
    num2 = parseFloat(num2);
    //Sumamos los valores
    var result = num1 * num2;
    //Ingresamos el resultado en el <p> result
    document.getElementById("result").innerHTML = result;
}
