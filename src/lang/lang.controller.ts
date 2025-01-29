import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { LangService } from "./lang.service";
import { CreateLangDto } from "./dto/create-lang.dto";
import { Lang } from "./models/lang.model";
import { updateLangDto } from "./dto/crteate-lang.dto";

@Controller("lang")
export class LangController {
  constructor(private readonly langService: LangService) {}
  @Post()
  async createLang(@Body() createLangDto: CreateLangDto): Promise<Lang> {
    return this.langService.createLang(createLangDto);
  }
  @Get()
  async findAllLang(): Promise<Lang[]> {
    return this.langService.findAllLang();
  }
  @Patch(":id")
  async updateByIdLang(
    @Param("id") id: number,
    @Body() updateLangDto: updateLangDto
  ): Promise<Lang | null> {
    return this.langService.updateLang(id, updateLangDto);
  }
  @Delete(":id")
  async deleteLangById(@Param() id: number) {
    return this.langService.deleteLangById(id);
  }
}
