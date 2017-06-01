/**
 * a typescript class for serialization and deserialization of JSON files
 * via javascript Promises
 */
export default class JSONSerializerDeserializer {
    private filePath;
    private fileLocation;
    /**
     * default constructor
     * @param filePath the path of the json file
     */
    constructor(filePath: string);
    /**
     * reading the file
     * @returns {} Promise showing error or JSON data
     */
    readJSONFile(): Promise<any>;
    /**
     * serialize the JSON data
     * @param data of type object to serialize
     */
    writeJSONFile(data: any): Promise<string>;
}
