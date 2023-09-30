import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestaoController } from './questao.controller';
import { QuestaoService } from './questao.service';
import { Questao } from './questao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Questao])],
  providers: [QuestaoService],
  controllers: [QuestaoController],
})
export class QuestaoModule {}
