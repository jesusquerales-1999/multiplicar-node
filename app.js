const argv = require('./config/yargs').argv;

const {crearArchivo,listarTabla} = require('./multiplicar/multiplicar');

let comando =argv._[0];
switch(comando){

  case 'listar':
  listarTabla(argv.base,argv.limite);
  break;

  case 'crear':
  crearArchivo(argv.base,argv.limite)
  .then(archivo=>{console.log(`el archivo ${archivo} fue creado`);})
  .catch(err => console.log(err));
  break;

default:
console.log('comandono reconocido');
}

//let argv2 = process.argv;
//console.log('limite',argv.limite);
//console.log(argv2);
//let parametro =argv[2];
//let base = parametro.split('=')[1];
/**--------------------------------------------------------------------------------------------- */
//siempre se acostumbra a colocar los 
//requiered  al inicio del proyecto.
//existen 3 tipos de requiered.
/*
el primer tipo de requiered es el que es propio de un
proyecto de node,es decir que esa libreria ya existe 
en node y solo tenemos que utilizarla,y es todo.

el segundo tipo,es aquel que no existe en la documentacion de
node,que no es propia o no es nativo y tenemos que llamarlo desde 
otra parte como
es el caso de expres,por ejemplo.

el tercer y ultimo tipo de requiered es aquel que noseotros
mismos creamos a medida que avanza nuestro proyecto
se identifican con un ./ o ../ estos son archivos
que escribimos nosotros mismos.
*/

//vamo a utilizar el file system para guardar 
//nuestro archivo como un archivo de texto.

//const fs = require('fs');
//const fs = require('express');
//const fs = require('../');



/*
hay varios objetos que estan corriendo en node al
momento de que la aplicacion se ejecuta,ya habiamos visto
el modulo que se crea de forma automatica.

hay otro muy importante que se llama el process.
"no hay que definirlo en ningun lugar",
cuando node se ejecuta ya crea esa variable de entorno
llamada "process".

en el process hay algo muy importante que se llama el argv
o argumentos.ejemplo...
console.log(process.argv);

cuando hacemos esto y estamos imprimiendo los argumentos
pareciera que no estamos mandando ningun argumento
pero por defecto existen dos...

[
  '/usr/local/bin/node',
  '/home/jesus/Escritorio/curso-de-node.js/bases-de-node/app4.js'
]
el primero es la ubicacion de node y el segundo es la 
ubicacion de el archivo que 
estamos utilizando en este momento.

*/




//console.log(process.argv);

/*

let data= '';

    for(let i=0;i<=10;i++){
        data +=(`${base} * ${i} = ${base*i} \n`);
    };
    console.log(data);

    fs.writeFile(`tablas/tabla-${base}`,data,(err) =>{

        if(err) throw err;

        console.log(`el archivo tabla-${base}.txt se creo`);
});
*/