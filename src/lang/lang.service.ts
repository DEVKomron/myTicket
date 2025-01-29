import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Lang } from "./models/lang.model";
import { CreateLangDto } from "./dto/create-lang.dto";
import { updateLangDto } from "./dto/crteate-lang.dto";
import { log } from "console";

@Injectable()
export class LangService {
  constructor(@InjectModel(Lang) private langModel: typeof Lang) {}

  async createLang(createLangDto: CreateLangDto): Promise<Lang> {
    const newLang = await this.langModel.create(createLangDto);
    return newLang;
  }

  async findAllLang(): Promise<Lang[]> {
    return this.langModel.findAll();
  }
  async findByIdLang(id: number): Promise<Lang> {
    return this.langModel.findOne({ where: { id } });
  }

  async updateLang(id: number, updateLangDto: updateLangDto): Promise<Lang | null> {
    const updatelang = await this.langModel.update(updateLangDto, {
        where : {id},
        returning: true
    })
    console.log(updatelang);
    
    return updatelang[1][0]
}

async deleteLangById(id: number):Promise<string>{
   const res = await this.langModel.destroy({where : {id}});
   if (res==1) {
    return `${id} raqamli til o'chirildi`
   }
    return "Bunday id mavjud emas"
}
}
