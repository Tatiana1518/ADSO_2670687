/* Ejercicio 1
 Una tienda ofrece un 25% de descuento
 por cada compra. Un cliente desea saber
 cuánto deberá pagar por su compra.

 let compra = prompt("Ingrese el valor de la compra");
 let des = 25/100;
 let pagof = parseInt(compra*des);
 alert("Lo que debe pagar el cliente es: "+pagof);*/

   /* Ejercicio 2
 Suponga que un individuo desea invertir 
 su capital en un banco y desea saber cuánto 
 dinero ganara después de un mes si 
 el banco paga a razón de 2% mensual. 

 let inv = prompt("Ingrese el valor de inversión");
 let mes = 2/100;
 let bpa = parseInt(inv*mes);
 alert("lo que ganara al invertir es: "+bpa)*/

/* Ejercicio 3
Un alumno desea saber cuál será su calificación final en la materia de
Algoritmos. Dicha calificación se compone de los siguientes porcentajes:
a. 55% del promedio de sus tres calificaciones parciales.
b. 30% de la calificación del examen final.
c. 15% de la calificación de un trabajo final.


let cal1 = prompt("Ingresa el valor de la calificación 1: ");
let cal2 = prompt("Ingresa el valor de la calificación 2: ");
let cal3 = prompt("Ingresa el valor de la calificación 3: ");
let examen_final = prompt("Ingresa el valor de examen final: ");
let trabajo_final = prompt("Ingresa el valor de trabajo final: ");
let promecal = (cal1 + cal2 + cal3)/3;
let cal_final = (promecal*.55) + (examen_final*.30) + (trabajo_final*.15);
alert("Valor de la calificacion final: "+cal_final);*/

/* Ejercicio 4
El dueño de una tienda compra un artículo a 
un precio determinado. Obtener el precio en que
 lo debe vender para obtener una ganancia del 30%.*/

 let precio_articulo = prompt ("Dar el precio del articulo: ");
 let ganancia = 30/100;
 let preciofinal = parseInt(precio_articulo*ganancia)
 alert("El precio al que se debe vender el articulo es: "+preciofinal)