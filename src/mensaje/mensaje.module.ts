import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { MensajeSchema } from './schema/mensaje.schema';
import { MensajeController } from './mensaje.controller';
import { MensajeService } from './mensaje.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Mensaje', schema: MensajeSchema }])],
    controllers: [MensajeController],
    providers: [MensajeService],
    exports: []
})
export class  MensajeModule {}