sumar = function(valor1,valor2){
	
	if((!isNaN(valor2))&&(!isNaN(valor1))&&(valor1!="")&&(valor2!="")){
		
		result = Number(valor1) + Number(valor2);	
		//res.status(200).json({dato: (typeof result)});
		//res.send(200);	

		
		
		
	}
	else{

		//result = "" + "Alguno de tus datos no es numerico amigueroouuu";
		result = "";
		//res.status(200).json({dato: (typeof result)});
	
	}
	return result;

}

module.exports = sumar;