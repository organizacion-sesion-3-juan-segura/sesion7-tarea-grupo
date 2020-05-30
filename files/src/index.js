'use strict'

const Store = require('./store.class');

const almacen=new Store(1);

// Aquí crea los productos y modifica el almacén como se indica 

console.log('LISTADO DEL ALMACÉN por existencias');
almacen.orderByUnits().forEach(prod=>console.log('- '+prod));

console.log('LISTADO DE PRODUCTOS CON POCAS EXISTENCIAS');
almacen.underStock(10).forEach(prod=>console.log('- '+prod));

