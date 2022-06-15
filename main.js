//* DESAFIO 01 ENTREGABLE - CREAR UN SIMULADOR INTERACTIVO


let producto = "";
let precio = 0;
let cantidad =0;
let precioFinal = 0;
let volver = false;
     
     
     alert("Bienvenido, a continuación verá una lista de productos de los cuales deberá seleccionar su compra.");
     
do{

     const compra = (a, b) => { return a * b};
     
     
     let producto = prompt("Productos: Pan \n Agua \n Ambos").toUpperCase();

     let cantidad = Number(prompt('Cuantos queres comprar?'));
     
     switch(producto){
          case "PAN":
               precio = 50;
               break;
          case "AGUA":
               precio = 100;
               break;
          case "AMBOS":
               precio = 140;
               break;
          default:
               alert("Algunos de los datos ingresados no son correctos");
               precio = 0;
               cantidad = 0;
               break;
     }
     
     let precioFinal = compra(precio, cantidad);

     

     
     alert("El valor de la compra es: " + precioFinal);
     
     
     volver = confirm("Queres volver a elegir tus productos?");
     
     
} while (volver);





