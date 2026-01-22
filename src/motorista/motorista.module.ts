import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Motorista } from "./entities/motorista.entity";
import { MotoristaService } from "./services/motorista.service";
import { MotoristaController } from "./controllers/motorista.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Motorista])],
    providers: [MotoristaService],
    controllers: [MotoristaController],
    exports: [],
})

export class MotoristaModule {}