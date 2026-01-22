import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { MotoristaService } from "../services/motorista.service";
import { Motorista } from "../entities/motorista.entity";

@Controller("/motorista")
export class MotoristaController{
    constructor(private readonly motoristaService: MotoristaService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Motorista[]>{
        return this.motoristaService.findAll();
    }

    @Get('/id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Motorista>{
        return this.motoristaService.findById(id);
    }

    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK)
    findAllByNome(@Param('nome') nome: string): Promise<Motorista[]>{
        return this.motoristaService.findAllByNome(nome);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() motorista: Motorista): Promise<Motorista>{
        return this.motoristaService.create(motorista);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() motorista: Motorista): Promise<Motorista>{
        return this.motoristaService.update(motorista);
    }

    @Delete('/id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.motoristaService.delete(id);
    }
}