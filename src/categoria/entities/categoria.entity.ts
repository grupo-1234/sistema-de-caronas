import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Viagem } from "../../viagem/entities/viagem.entity"; // Importe a entidade que receberá o relacionamento

@Entity({ name: "tb_categorias" }) 
export class Categoria {

    @PrimaryGeneratedColumn() 
    id: number;

    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    descricao: string; 

    @OneToMany(() => Viagem, (viagem) => viagem.categoria)
    viagem: Viagem[];
}