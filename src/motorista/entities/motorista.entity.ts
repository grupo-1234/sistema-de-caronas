import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Viagem } from "../../viagem/entities/viagem.entity";

@Entity({name: "tb_motorista"})

export class Motorista{

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    nome: string;

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    cpf: string;

    @IsEmail()
    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    email: string;

    @Column({length: 5000})
    foto: string;

    @MinLength(8)
    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    senha: string;

    @OneToMany(() => Viagem, (viagem) => viagem.motorista)
    viagem: Viagem[]

}