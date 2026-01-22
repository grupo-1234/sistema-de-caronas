import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Viagem } from './viagem/entities/viagem.entity';
import { ViagemModule } from './viagem/viagem.module';
import { Motorista } from './motorista/entities/motorista.entity';
import { MotoristaModule } from './motorista/motorista.module';
import { Categoria } from './categoria/entities/categoria.entity';
import { CategoriaModule } from './categoria/categoria.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'db_caronas',
        entities: [Viagem, Motorista, Categoria],
        synchronize: true,
}),
ViagemModule,
MotoristaModule,
CategoriaModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}
