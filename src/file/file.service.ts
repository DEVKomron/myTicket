import { Injectable, InternalServerErrorException } from "@nestjs/common";
import * as path from "path";
import * as uuid from "uuid";
import * as fs from "fs";


Injectable()
export class FileService{
    async saveFile(file:any): Promise<string>{
        try {
            const filename = uuid.v4() + ".jpg"
            const filePath = path.resolve(__dirname, "..", "..", "static")
            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, {recursive : true})
            }
            fs.writeFileSync(path.join(filePath, filename), file.buffer)
            return filename
        } catch (error) {
            throw new InternalServerErrorException("filega yozishda xatolik")
            
        }
    }
}