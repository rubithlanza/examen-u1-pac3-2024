/*Calificación Final (20%):
a. Crear un programa en JavaScript que solicite al usuario un número y determine si ese número es múltiplo
de 3, múltiplo de 5 o de ambos.
i. Ejemplo:
1. Si el usuario ingresa 15, el programa debe imprimir: "El número es múltiplo de 3 y de
5."
ii. Pistas:
1. Usa el operador módulo (%) para comprobar si un número es divisible por 3 o 5.
2. Usa la función prompt() para pedir el número. */

const numero = parseInt(prompt("Digite un numero"));

if(numero %5 || numero%3){
    alert(`EL NUMERO INGRESADO ${numero} NO ES MULTIPLO DE 3 Y 5`)
    console.log(`EL NUMERO INGRESADO ${numero} NO ES MULTIPLO DE 3 Y 5`);

} else{

    alert(`EL NUMERO INGRESADO ${numero} ES MULTIPLO DE 3 Y 5`)
    console.log(`EL NUMERO INGRESADO ${numero} ES MULTIPLO DE 3 Y 5`);
    
}