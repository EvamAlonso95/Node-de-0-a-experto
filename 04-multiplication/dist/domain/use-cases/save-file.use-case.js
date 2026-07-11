"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveFile = void 0;
const fs_1 = require("fs");
class SaveFile {
    constructor() {
        //** repository: StorageRepository  */
    }
    execute({ fileContent, FileDestination = "outputs", fileName = "table", }) {
        try {
            (0, fs_1.mkdirSync)(FileDestination, { recursive: true });
            (0, fs_1.writeFileSync)(`${FileDestination}/${fileName}.txt`, fileContent);
            return true;
        }
        catch (error) {
            console.error(error);
            return false;
        }
    }
}
exports.SaveFile = SaveFile;
