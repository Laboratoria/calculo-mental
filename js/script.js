var numeroBase = Math.floor(Math.random() * 30);
var operando;
alert("comienza con " + numeroBase);


for (var i = 0; i < 5; i++) {
	operando = Math.floor(Math.random() * 15);

	switch (Math.floor(Math.random() * 3)) {
	    case 0:
	    	operando = Math.floor(Math.random() * 6);
	   		alert("multiplicalo por " + operando);
	    	numeroBase *= operando;
	        break;
	    case 1:
	   		alert("restale " + operando);
	    	numeroBase -= operando;
	        break;
	    case 2:
	   		alert("sumale " + operando);
	    	numeroBase += operando;
	        break;
	}
}

var respuesta = prompt("¿Cuál es el número?");

if(respuesta == numeroBase){
	alert("Correcto!, el número es: "+ numeroBase);
} 
else {    	
	alert("Incorrecto!, el número es: "+ numeroBase);
}

