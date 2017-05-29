'use strict'

const path = require ('path');
const fileTest = require ('../index').JsonSerializerDeserializer;
const expect = require ('chai').expect;

const filePath = path.resolve ('./tests/samplefile.json');

describe ('Json Serializer Deserializer', () => {
	/**
	 * test case for reading config file
	 */
	describe ('read function', () =>{
		it ('should output a json value', () => {
			fileTest.readFile (filePath).then ((val) => {
				console.log (val);
			}).catch ((err) => {
				console.err (err);
			});
		})
	});

	describe ('mapping function', () => {
		it ('should return a JSON object', () => {
			fileTest.readFile (filePath). then ((val) => {
				expect (typeof JSON.parse (val)).to.be.an ('object');
				// console.log (typeof JSON.parse (val))
			}).catch ((err) => {
				console.error (err);
			});
		})
	})

	describe ('writing function', () => {
		it ('should update the file content', () => {
			fileTest.readFile (filePath). then ((val) => {
				var x = JSON.parse (val);
				x.age = 22;

				fileTest.writeFile (filePath, x).then ((val) => {
					console.log (val);
				}).catch ((err) => {
					console.log (err);
				});
			}).catch ((err) => {
				console.error (err);
			});
		})
	})
})