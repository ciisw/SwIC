const express = require('express');
const router = express.Router();
const suma = require('./suma');
var result;

router.get('/add',(req,res)=>{

	res.render('index',{suma});

})

router.post('/add', (req,res)=>{
		
	result = suma(req.body.valor1,req.body.valor2);

	res.render('index',{result});
	
});

module.exports = router;