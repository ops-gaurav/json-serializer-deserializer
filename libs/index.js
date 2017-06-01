"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
/**
 * a typescript class for serialization and deserialization of JSON files
 * via javascript Promises
 */
class JSONSerializerDeserializer {
    /**
     * default constructor
     * @param filePath the path of the json file
     */
    constructor(filePath) {
        this.filePath = filePath;
        this.fileLocation = "";
        this.fileLocation = filePath;
    }
    /**
     * reading the file
     * @returns {} Promise showing error or JSON data
     */
    readJSONFile() {
        return new Promise((resolve, reject) => {
            if (this.fileLocation) {
                var filePath = path.resolve(this.fileLocation);
                fs.readFile(filePath, (err, data) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(JSON.parse(data.toString()));
                    }
                });
            }
            else {
                reject('File invalid');
            }
        });
    }
    /**
     * serialize the JSON data
     * @param data of type object to serialize
     */
    writeJSONFile(data) {
        return new Promise((resolve, reject) => {
            if (this.fileLocation) {
                var filePath = path.resolve(this.fileLocation);
                fs.writeFile(filePath, JSON.stringify(data), (err) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve('File saved!');
                    }
                });
            }
            else {
                reject('File invalid');
            }
        });
    }
}
exports.default = JSONSerializerDeserializer;
