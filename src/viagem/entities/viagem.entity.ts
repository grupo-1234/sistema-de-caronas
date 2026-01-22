import { IsNotEmpty } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'tb_viagem' })
export class Viagem {

  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 100 })
  origem: string;

  @IsNotEmpty()
  @Column({ length: 100 })
  destino: string;

  @UpdateDateColumn()
  data: Date


}
