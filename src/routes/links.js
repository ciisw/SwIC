const express = require('express');
const router = express.Router();
const suma = require('./suma');
var result;

router.get('/add',(req,res)=>{

	//res.render('links/add',{suma});
	res.render('index',{suma});

})

router.post('/add', (req,res)=>{
	//const {valor1,valor2} = req.body //Almaceno el contenido de req.body en el objeto macheando propiedad a propiedad

	console.log(req.body.valor1);
	console.log(req.body.valor2);
	result = suma(req.body.valor1,req.body.valor2);
	console.log(result);
	if(isNaN(result)){
		
		
		res.send(404);
	}
	else{

		res.render('index',{result});
		//res.send(200);
	
	}
	

});



//Aca termina la matufia para la actualizacion de datos

module.exports = router;