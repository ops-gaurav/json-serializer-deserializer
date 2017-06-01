"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
/**
 * a typescript class for serialization and deserialization of JSON files
 * via javascript Promises
 */
var JSONSerializerDeserializer = (function () {
    /**
     * default constructor
     * @param filePath the path of the json file
     */
    function JSONSerializerDeserializer(filePath) {
        this.filePath = filePath;
        this.fileLocation = "";
        this.fileLocation = filePath;
    }
    /**
     * reading the file
     * @returns {} Promise showing error or JSON data
     */
    JSONSerializerDeserializer.prototype.readJSONFile = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.fileLocation) {
                var filePath = path.resolve(_this.fileLocation);
                fs.readFile(filePath, function (err, data) {
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
    };
    /**
     * serialize the JSON data
     * @param data of type object to serialize
     */
    JSONSerializerDeserializer.prototype.writeJSONFile = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.fileLocation) {
                var filePath = path.resolve(_this.fileLocation);
                fs.writeFile(filePath, JSON.stringify(data), function (err) {
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
    };
    return JSONSerializerDeserializer;
}());
exports["default"] = JSONSerializerDeserializer;
