import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Viagem } from "../entities/viagem.entity";
import { ILike, Repository } from "typeorm";
import { DeleteResult } from "typeorm/browser";

@Injectable()
export class ViagemService {
    constructor(
        @InjectRepository(Viagem)
        private viagemRepository: Repository<Viagem>,
    ) {}

    async findAll(): Promise<Viagem[]> {
        return this.viagemRepository.find();
    }

    async findById(id: number): Promise<Viagem> {
        const viagem = await this.viagemRepository.findOne({ where: { id } });
        if (!viagem) 
            throw new HttpException('Viagem não encontrada', HttpStatus.NOT_FOUND);
        
        return viagem;
    }

    async findByDestino(destino: string): Promise<Viagem[]> {
        return await this.viagemRepository.find({
            where: { destino: ILike(`%${destino}%`) },
        });
    }

    async create(viagem: Viagem): Promise<Viagem> {
        return this.viagemRepository.save(viagem);
    }

    async update(viagem: Viagem): Promise<Viagem> {
        await this.findById(viagem.id);
        return this.viagemRepository.save(viagem);
    }

    async delete(id: number): Promise<DeleteResult> {
        await this.findById(id);
        return this.viagemRepository.delete(id);
    }

    //calulo do tempo da viagem
    async calcularTempo(id: number): Promise<number>{
        const viagem = await this.findById(id);

        const tempoEmHoras = viagem.distancia / viagem.velocidadeMedia
        const tempoEmMinutos = tempoEmHoras * 60;

        return Number(tempoEmMinutos.toFixed(2))
    }

    //Cazlculo do valor da viagem
    async calcularValor(id: number): Promise<number>{
        const viagem = await this.findById(id);

        const tempoEmHoras = viagem.distancia / viagem.velocidadeMedia;
        const tempoEmMinutos = tempoEmHoras + 60;

        const valorPorKm = viagem.distancia * 2;
        const valorPorMinuto = tempoEmMinutos * 0.5;

        const valorTotal = valorPorKm + valorPorMinuto;

        return Number(valorTotal.toFixed(2));
    }

}
