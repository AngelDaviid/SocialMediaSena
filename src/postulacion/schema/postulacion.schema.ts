import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema({
    timestamps: true,
})

export class Postulacion{
    @Prop({
        unique: true,
        required: true
    })
    ofertaEmpleoId: string;

    @Prop({
        required: true
    })
    cvAdjunto: string;

    @Prop({
        required: true
    })
    mensajePresentacion: string;

    @Prop({
        required: true
    })
    estado: string;
}

export const PostulacionSchema = SchemaFactory.createForClass(Postulacion);