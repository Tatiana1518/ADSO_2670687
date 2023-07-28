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

/* Un alumno desea saber cuál será su calificación final en la materia de
Algoritmos. Dicha calificación se compone de los siguientes porcentajes:
a. 55% del promedio de sus tres calificaciones parciales.
b. 30% de la calificación del examen final.
c. 15% de la calificación de un trabajo final.*/


let examen_final = ("Ingresa el valor de examen final:");
let cal1 = ("Ingresa el valor de la calificación 1:");
let cal2 = ("Ingresa el valor de la calificación 2:");
let cal3 = ("Ingresa el valor de la calificación 3:");
let trabajo_final = ("Ingresa el valor de trabajo final:");
let promecal = parseInt(cal1) + (cal2) + (cal3);
let procal = parseInt(promecal/3)
let cal_final = parseInt(procal*0.55+examen_final*0.3+trabajo_final*0.15);
alert("Valor de la calificacion final: "*cal_final);

