var assert = require('assert');
var request = require('supertest');
var server = require('../src/index.js');
var request = request("http://localhost:4000");
var suma = require('../src/routes/suma.js');
var chai = require('chai');
var assert2 = chai.assert;

describe("Aplicacion Express", () => {


	

	it("Tirame una sooga" , (done) => {

		//request.post('/links/add').send({valor1:"5",valor2:"2"}).expect(200,done);
		/*request.post('/links/add').send({valor1:"3",valor2:"5"}).expect(function(response){

			assert(response.locals, "8");
			//response.locals  != "n";
			//console.log(res.locals);
			

		}).end(done);*/
		

		result = suma("4","5");
		


		//request.post('/links/add').send({valor1:"r",valor2:"5"}).expect(function(res){assert.equal(res.locals.dato,"string")}).end(done);
		


		assert2.equal((!isNaN(result)),true);

		done();
		


		});

		/*it("Si pasas te convertis en Heroe" , (done) => {

		//request.post('/links/add').send({valor1:"5",valor2:"2"}).expect(200,done);
		//request.post('/links/add').send({valor1:"3",valor2:"5"}).expect(200,{"dato": "number"},done);
		result = suma("r","5");
		


		//request.post('/links/add').send({valor1:"r",valor2:"5"}).expect(function(res){assert.equal(res.locals.dato,"string")}).end(done);
		


		assert2.equal(result,"Alguno de tus datos no es numerico amigueroouuu");

		done();
		


		});*/

	after(function(done){

		server.close();
		done();

	});

	//server.close();

	})

