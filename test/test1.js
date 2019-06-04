var assert = require('assert');
var request = require('supertest');
var server = require('../src/index.js');
var request = request("http://localhost:4000");
var suma = require('../src/routes/suma.js');
var chai = require('chai');
var assert2 = chai.assert;

describe("Aplicacion Express", () => {


	

	it("Tirame una sooga" , (done) => {


		result = suma("9","5");
		
		assert2.equal((typeof result == 'number'),true);

		done();
		


		});

	it("Hoy te convertis en heroe" , (done) => {
			

		result = suma("a","5");
		
		assert2.equal((typeof result == 'undefined'),true);

		done();
		


		});

		

	after(function(done){

		server.close();
		done();

	});


	})

