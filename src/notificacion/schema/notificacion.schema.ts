import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose'

@Schema({
    timestamps: true
})

export class Notificacion {
    @Prop({ required: true })
    mensaje: string

    @Prop({ required: true })
    tipo: string
}

export const NotificacionSchema = SchemaFactory.createForClass(Notificacion)