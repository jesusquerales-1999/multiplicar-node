const fs = require('fs');

const listarTabla =(base,limite = 10)=>{
    for(let i=1;i<=limite;i++){
        console.log(`${base} * ${i} = ${base*i}`);
    };
}

const crearArchivo = (base,limite =10) => {

   return new Promise((resolve,reject)=>{

    if(!Number(base)){
        reject('hay un error');
    return;
}
    let data= '';
    for(let i=1;i<=limite;i++){
        data +=(`${base} * ${i} = ${base*i} \n`);
    };
    console.log(data);
    
    fs.writeFile(`tablas/tabla-${base}.txt`,data,(err) =>{
    
    if(err) reject(err);
    else resolve(`tabla-${base}.txt`);
    });
    });
}
module.exports ={
    crearArchivo,
    listarTabla
}