var assert = require('assert');
var request = require('supertest');
var app = require('../src/routes/links.js');
var request = request("http://localhost:4000");

describe("Aplicacion Express", () => {

	it("Tirame una sooga Japish japish" , (done) => {

		//request.post('/links/add').send({valor1:"5",valor2:"2"}).expect(200,done);
		request.post('/links/add').send({valor1:"2",valor2:"2"}).expect(200,done);

		})

	})

