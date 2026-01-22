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

  @IsNotEmpty()
  @Column('float')
  distancia: number;

  @IsNotEmpty()
  @Column('float')
  velocidadeMedia: number;

  @UpdateDateColumn()
  data: Date

  /* @ManyToOne(() => Motorista, (motorista) => motorista.viagens, {
    onDelete: 'CASCADE'
  })
  motorista: Motorista;

     @ManyToOne(() => Categoria, (categoria) => categoria.viagens, {
    onDelete: 'CASCADE'
  })
  categoria: Categoria;*/
}

/*CREATE DATABASE db_caronas;

USE db_caronas;

INSERT INTO tb_viagem (origem, destino, distancia, velocidadeMedia, data)
VALUES ('Recife', 'Olinda', 12.5, 60.0, current_timestamp());

INSERT INTO tb_viagem (origem, destino, distancia, velocidadeMedia, data)
VALUES ('Recife', 'Jaboatão', 18.2, 80.0, current_timestamp());

SELECT * FROM tb_viagem;*/ 