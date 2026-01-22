import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Motorista } from "./entities/motorista.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Motorista])],
    providers: [],
    controllers: [],
    exports: [],
})

export class MotoristaModule {}