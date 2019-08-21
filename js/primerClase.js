//variables global
// let nombreCompleto ="Luis Navas";
// alert(nombreCompleto);
// function cambiarNombre(){
// 	if(nombreCompleto=="Luis Navas"){
// 		nombreCompleto = "Laura Buczer";
// 	}else{
// 		nombreCompleto = "Luis Navas";
// 	}
	
// }

//variable local

// function localVariable(){
// 	let luis =46;
// 	return luis;
// }
// alert(localVariable());
// if(true){
// 		var nombre = "Luis";
// 	}
// console.log(nombre);

// const numero = 12;
// console.log(numero);

// const alumnos=["Zoe","Nahuel","Ian","Juan"];

//1. Cambiar el siguiente código para que todas las
// variables se creen usando let o const.

// function mostrarVariasVeces(str) {
//  const oracion = str + " es lo mejor!";
//  	for (let i = 0; i < str.length; i += 2) {
//    		console.log(oracion);
//  	}
// }

// mostrarVariasVeces("ES6");

// 2. El siguiente código, busca el número más 
// grande dentro de un array. 
// ¿Cómo cambiarías el código para utilizar sólo let y/o const?

// const array = [4, 2, 1, 7, 5];
// let max = array[0];
// for (let i = 0; i < array.length; i++) {
//  	let el = array[i];
//  	if (el > max) {
//    		max = array[i];
//  	}
// }
// console.log(max);
let numero=0,control=0,color=["yellow","green","red","blue"],control2=0;
for(let n=0; n < 108; n++){
	let  cartas=document.getElementById('principal');

	if(numero<10 && control<25){
		cartas.innerHTML+="<div style='width:50px; heigth:50px; float:left;background-color:"+color[control2]+";'>"+numero+"</div> ";
		numero++;

	}else{
		numero=0;
		control++;
		if(control+=2){control2 ++;}
	}
