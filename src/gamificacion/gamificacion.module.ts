import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GamificacionSchema } from './schema/gamificacion.schema';
import { GamificacionController } from './gamificacion.controller';
import { GamificacionService } from './gamificacion.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Gamificacion', schema: GamificacionSchema }])],
    controllers: [GamificacionController],
    providers: [GamificacionService],
    exports: []
})
export class GamificacionModule {}
