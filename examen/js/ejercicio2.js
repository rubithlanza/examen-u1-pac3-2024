/*2. Calificación Final (25%):
a. Escribe un programa que reciba una calificación numérica entre 0 y 100 y luego imprima su equivalente
en letras, de acuerdo con la siguiente tabla:
i. 90-100: A
ii. 80-89: B
iii. 70-79: C
iv. 60-69: D
v. 0-59: F */

let numero = parseInt(prompt("Digite un numero"));

if(numero==90 && numero <=100){
    alert(`la letra que ingreso es la A`);
    console.log(`La letra es la A`);
}else if(numero==89 && numero <=80){
    alert(`la letra que ingreso es la B`);
    console.log(`La letra es la B`);
} else if(numero==70 && numero <=79){
    alert(`la letra que ingreso es la C`);
    console.log(`La letra es la C`);

} else if(numero==60 && numero <=69){
    alert(`la letra que ingreso es la D`);
    console.log(`La letra es la D`);

} else if(numero==0 && numero <=59){
    alert(`la letra que ingreso es la F`);
    console.log(`La letra es la F`);

}else{
    alert(`DIGITO INVALIDO`);
    console.log(`DIGITO INVALIDO`);

}