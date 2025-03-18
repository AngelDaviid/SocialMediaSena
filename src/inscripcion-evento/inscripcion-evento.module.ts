import { Module } from '@nestjs/common';
import { Mongoose } from 'mongoose';
import { InscripcionEventoSchema } from './schema/inscripcionevento.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { InscripcionEventoController } from './inscripcion-evento.controller';
import { InscripcionEventoService } from './inscripcion-evento.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'InscripcionEvento', schema: InscripcionEventoSchema }])],
    controllers: [InscripcionEventoController],
    providers: [InscripcionEventoService],
})
export class InscripcionEventoModule {}
