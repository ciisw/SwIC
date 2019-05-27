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

	//console.log(req.body.valor1);
	//console.log(req.body.valor2);

	
	//console.log(result);

	

	//res.body = JSON.stringify({dato: typeof result});
	//res.body.dato = typeof result;
	
	result = suma(req.body.valor1,req.body.valor2);

	//result2 = typeof result;
	
	//res.locals.dato = result2;
	//console.log(req.body.valor2.length);
	res.locals = result;
	res.render('index',{result});

	console.log(res.locals);
	//return (typeof result);

	//res.json({"error" : false, "message" : "success", "data" : req.body.num1 + req.body.num2});
	//console.log(res.body);
	
	
	

});



//Aca termina la matufia para la actualizacion de datos

module.exports = router;