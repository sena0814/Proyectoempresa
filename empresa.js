const prompt = require('prompt-sync')({ siguint: true});
let salario = prompt("Digite el salario: $")
console.log("------------------------------------------------------------------")
let empleado_uno=prompt("Digite el nombre del empleado uno: ");
let vtasdpto_uno=(prompt("Digite las ventas mensuales del departamento uno: $"))
console.log("-------------------------------------------------------------------")
let empleado_dos=prompt("Digite el nombre del empleado dos: ");
let vtasdpto_dos=(prompt("Digite las ventas mensuales del departamento dos: $"))
console.log("-------------------------------------------------------------------")
let empleado_tres=prompt("Digite el nombre del empleado tres: ");
let vtasdpto_tres=(prompt("Digite las ventas mensuales del departamento tres: $"))
console.log("**************VENTAS DE LOS TRES DEPARTAMENTOS****************** ")
let ventastotales = parseInt(vtasdpto_uno)+parseInt(vtasdpto_dos)+parseInt(vtasdpto_tres)
console.log("-------------------------------------------------------------------")
console.log("Las ventas totales son:$" + ventastotales)
console.log("-------------------------------------------------------------------")
let porcentaje_vta_Euno = (vtasdpto_uno/ventastotales)
console.log(`El porcentaje de ventas del empleado ${empleado_uno} es de ${porcentaje_vta_Euno}`)
console.log("                                                                    ")
let porcentaje_vta_Edos = (vtasdpto_dos/ventastotales)
console.log(`El porcentaje de ventas del empleado ${empleado_dos} es de ${porcentaje_vta_Edos}`)
console.log("                                                                    ")
let porcentaje_vta_Etres = (vtasdpto_tres/ventastotales)
console.log(`El porcentaje de ventas del empleado ${empleado_tres} es de ${porcentaje_vta_Etres}`)
console.log("-------------------------------------------------------------------")
if(porcentaje_vta_Euno>0.33){
    comision=(salario*0.2)
    salario=parseInt(salario)+parseInt(comision)
    console.log(`Hola ${empleado_uno} su comisión es de $ ${comision}`)
    console.log(`Su salario mas comision es de: $ ${salario} `)
}else if(porcentaje_vta_Edos>0.33){
    comision1=(salario*0.2)
    salario=parseInt(salario)+parseInt(comision1)
    console.log(`Hola ${empleado_dos} su comisión es de $ ${comision}`)
    console.log(`Su salario mas comision es de: $ ${salario} `)
}else if(porcentaje_vta_Etres>0.33){
    comision2=(salario*0.2)
    salario=parseInt(salario)+parseInt(comision2)
    console.log(`Hola ${empleado_tres} su comisión es de $ ${comision}`)
    console.log(`Su salario mas comision es de: $ ${salario} `) 
}else{
    console.log("Asalariados !!!coloquensen las pilas a vendeeeeerrrrrr")
}


   
    
