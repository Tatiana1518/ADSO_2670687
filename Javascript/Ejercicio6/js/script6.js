/* Ejercicio 4
El dueño de una tienda compra un artículo a 
un precio determinado. Obtener el precio en que
 lo debe vender para obtener una ganancia del 30%.*/

 let precio_articulo = prompt ("Dar el precio del articulo: ");
 let ganancia = 30/100;
 let preciofinal = parseInt(precio_articulo*ganancia)
 alert("El precio al que se debe vender el articulo es: "+preciofinal)
