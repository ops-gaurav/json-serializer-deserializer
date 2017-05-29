/**
 * @desc a simple node module to read/write json file
 * usually used by the applications storing config data
 * @author gaurav
 */
var fs = require('fs');
var path = require('path');

function promiseFileRead (fileLocation) {
	/**
	 * creating a new read file promise
	 */
	return new Promise((resolve, reject) => {
		var filePath = path.resolve(fileLocation);
		fs.readFile(filePath, (err, data) => {
			if (err) {
				/**
				 * if some error then reject the promise with a message
				 */
				reject(err);
			} else {
				/**
				 * otherwise resolve the date
				 */
				resolve(data.toString());
			}
		});
	});
}

/**
 * write json to the file
 * @param {string} filePath 
 * @param {object} data content to persist
 */
var promiseFileWrite = (fileLocation, data) => {
	return new Promise ((resolve, reject) => {
		var filePath = path.resolve (fileLocation);
		fs.writeFile (filePath, JSON.stringify(data), (err) => {
			if (err) {
				/**
				 * if error then reject the promise
				 */
				reject (err);
			} else {
				/**
				 * otherwise resolve
				 */
				resolve ('File has been saved');
			}
		});
	})
}

var object = {
	/**
	 * @returns Promise to read file content
	 * @param {fileLocation} string the path of the config file
	 */
	readFile: promiseFileRead,
	writeFile: promiseFileWrite
};
module.exports.JsonSerializerDeserializer = object;