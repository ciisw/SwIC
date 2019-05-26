var assert = require('assert');
var request = require('supertest');
var server = require('../src/index.js');
var request = request("http://localhost:4000");

describe("Aplicacion Express", () => {


	afterEach(function(){

		server.close();

	});

	it("Tirame una sooga Japish japish" , (done) => {

		//request.post('/links/add').send({valor1:"5",valor2:"2"}).expect(200,done);
		request.post('/links/add').send({valor1:"2",valor2:"2"}).expect(200,done);

		})

	})

