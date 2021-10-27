function ConvertirOctal() { 
    var numeroctal = document.getElementById('octal').value;
    var numdecimal = parseInt(numeroctal, 8);
    alert("La respuesta es: " + numdecimal);
}
function Calculadora() {
    
    var num1 = parseInt(document.getElementById('cuadr1').value);
    var num2 = parseInt(document.getElementById('cuadr2').value);
    for (x = 1; x <= 5; x++) {
        if (x == 1) { 
            suma = num1 + num2;
            alert("La suma de " + num1 +  " + " +  num2 + " es: " + suma);
        }
        if(x == 2) { 
            resta = num1 - num2;
            alert("La resta de " + num1 +  " - " +  num2 + " es: " + resta); 
        }
        if (x== 3) { 
            producto = num1 * num2;
            alert("La multiplicación de " + num1 +  " * " +  num2 + " es: " + producto );
        }    
        if (x == 4) { 
            divi = num1 /num2;
            num2 != 0 ?
                divi = num1 / num2:
                alert("No se puede dividir entre 0");
                alert("La división de " + num1 +  " / " +  num2 + " es: " + divi);
        }
    }
}