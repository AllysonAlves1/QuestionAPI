import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { QuestaoService } from './questao.service';
import { QuestaoDTO } from './questao.dto';

@Controller('questao')
export class QuestaoController {
  constructor(private questaoService: QuestaoService) {}

  @Get()
  async findAll() {
    return this.questaoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') questaoId: number) {
    return this.questaoService.findOne(questaoId);
  }

  @Post()
  async create(@Body() questaoDTO: QuestaoDTO) {
    return this.questaoService.create(questaoDTO);
  }

  @Put(':id')
  async update(@Param('id') questaoId: number, questaoDTO: QuestaoDTO) {
    return this.questaoService.update(questaoId, questaoDTO);
  }

  @Delete('id')
  async delete(@Param('id') questaoId: number) {
    return this.questaoService.delete(questaoId);
  }
}
