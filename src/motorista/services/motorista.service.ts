import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Motorista } from "../entities/motorista.entity";
import { ILike, Repository } from "typeorm";
import { DeleteResult } from "typeorm/browser";

@Injectable()
export class MotoristaService{
    constructor(
        @InjectRepository(Motorista)
        private motoristaRepository: Repository<Motorista>
    ) {}

    async findAll(): Promise<Motorista []>{
        return await this.motoristaRepository.find();
    }

    async findById(id: number): Promise<Motorista>{
        const motorista = await this.motoristaRepository.findOne({
            where: {
                id
            }
        });

        if (!motorista){
            throw new HttpException("Motorista não encontrado!", HttpStatus.NOT_FOUND);
        }
        return motorista;

    }

    async findAllByNome(nome: string): Promise<Motorista[]>{
        return await this.motoristaRepository.find({
            where:{
                nome: ILike(`%${nome}%`)
            }
        })
    }

    async create(motorista: Motorista): Promise<Motorista>{
        return await this.motoristaRepository.save(motorista);
    }

    async update(motorista: Motorista): Promise<Motorista>{
        await this.findById(motorista.id)

        return await this.motoristaRepository.save(motorista);
    }

    async delete(id: number): Promise<DeleteResult>{
        await this.findById(id)

        return await this.motoristaRepository.delete(id)
    }

    



}