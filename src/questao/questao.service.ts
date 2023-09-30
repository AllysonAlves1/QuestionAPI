import { QuestaoDTO } from './questao.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Questao } from './questao.entity';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class QuestaoService {
  constructor(
    @InjectRepository(Questao)
    private questaoRepository: Repository<Questao>,
  ) {}

  async findAll(): Promise<Questao[]> {
    const questoes = await this.questaoRepository.find();
    return questoes;
  }

  async findOne(questaoId: number): Promise<Questao | undefined> {
    return this.questaoRepository.findOne({ where: { questaoId } });
  }

  async create(questaoDTO: QuestaoDTO): Promise<Questao> {
    const questao = new Questao();
    questao.titulo = questaoDTO.titulo;
    questao.descricao = questaoDTO.descricao;
    questao.resposta = questaoDTO.resposta;
    return this.questaoRepository.save(questao);
  }

  async update(questaoId: number, questaoDTO: QuestaoDTO): Promise<Questao> {
    const questao = await this.questaoRepository.findOne({
      where: { questaoId },
    });

    if (!questao) {
      throw new NotFoundException('Questao not found');
    }
    questao.titulo = questaoDTO.titulo;
    questao.descricao = questaoDTO.descricao;
    questao.resposta = questaoDTO.resposta;
    return this.questaoRepository.save(questao);
  }

  async delete(questaoId: number): Promise<Questao> {
    const questao = await this.questaoRepository.findOne({
      where: { questaoId },
    });

    if (!questao) {
      throw new NotFoundException('Questao not found');
    }
    return this.questaoRepository.remove(questao);
  }
}
