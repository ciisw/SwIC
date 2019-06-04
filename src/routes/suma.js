sumar = function(valor1,valor2){
	
	var result;
	
	if((!isNaN(valor2))&&(!isNaN(valor1))&&(valor1!="")&&(valor2!="")){
		
		result = Number(valor1) + Number(valor2);

	}

	//result = Number(valor1) + Number(valor2);

	//console.log(typeof result);
	return result;

}

module.exports = sumar;