import { Module } from '@nestjs/common';
import { NotificacionService } from './notificacion.service';
import { NotificacionController } from './notificacion.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificacionSchema } from './schema/notificacion.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Notificacion', schema: NotificacionSchema }])],
    providers: [NotificacionService],
    controllers: [NotificacionController]
})
export class NotificacionModule {}
