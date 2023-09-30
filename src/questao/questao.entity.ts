import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Questao {
  @PrimaryGeneratedColumn()
  questaoId: number;

  @Column()
  titulo: string;

  @Column()
  descricao: string;

  @Column()
  resposta: string;
}
