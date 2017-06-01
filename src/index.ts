import * as fs from 'fs';
import * as path from 'path';
/**
 * a typescript class for serialization and deserialization of JSON files
 * via javascript Promises
 */
export default class JSONSerializerDeserializer {

	private fileLocation: string = ""

	/**
	 * default constructor
	 * @param filePath the path of the json file
	 */
	constructor (private filePath: string){ 
		this.fileLocation = filePath;
	}

	/**
	 * reading the file
	 * @returns {} Promise showing error or JSON data
	 */
	public readJSONFile(): Promise<any> {
		return new Promise<any> ((resolve, reject) => {
			if (this.fileLocation) {
				var filePath = path.resolve (this.fileLocation);

				fs.readFile (filePath, (err, data) => {
					if (err) {
						reject (err);
					} else {
						resolve (JSON.parse (data.toString()));
					}
				});
			} else {
				reject ('File invalid');
			}
		});
	}

	/**
	 * serialize the JSON data
	 * @param data of type object to serialize
	 */
	public writeJSONFile(data): Promise<string> {
		return new Promise<string> ((resolve, reject) => {
			if (this.fileLocation) {
				var filePath = path.resolve (this.fileLocation);

				fs.writeFile (filePath, JSON.stringify (data), (err) => {
					if (err) {
						reject (err);
					} else {
						resolve ('File saved!');
					}
				});
			} else {
				reject ('File invalid');
			}
		});
	}

}