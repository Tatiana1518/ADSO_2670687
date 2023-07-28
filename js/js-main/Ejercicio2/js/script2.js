/*Dado el sueldo de un empleado
 imprimir en un alerta
 el nuevo sueldo del empleado si 
 tuvo un aumento del 10%  

 let sueldo= prompt("Ingrese el valor del sueldo");
 let psueldo = 10/100;
 let nsueldo = parseInt(sueldo) + parseInt (sueldo*sueldo);
 alert("El nuevo sueldo con el aumento es: "+nsueldo); */

 /* Un vendedor que tiene su sueldo base,
 recibe una comicion del 30% del
 total de las ventas del mes,
 el quiere saber cuanto ganara 
 en un mes que tuvo tres ventas */

 let sueldo = prompt("Ingrese el valor del sueldo");
 let venta1 = prompt("Ingrese el valor de la primera venta");
 let venta2 = prompt("Ingrese el valor de la segunda venta");
 let venta3 = prompt("Ingrese el valor de la tercera venta");
 let tven = parseInt(venta1) + parseInt(venta2) + parseInt(venta3);
 let pcom = 30/100;
 let com = parseInt(tven*pcom);
 let mes = parseInt(com) + parseInt(sueldo);
 alert("Este mes el gano:" +mes);


