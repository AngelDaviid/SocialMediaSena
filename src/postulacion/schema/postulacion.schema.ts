import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose from 'mongoose';

@Schema({
    timestamps: true,
})

export class Postulacion{

    @Prop ({
        Type: mongoose.Schema.Types.ObjectId,
        required: true
    })
    iduser: mongoose.Schema.Types.ObjectId;

    @Prop({
        Type: mongoose.Schema.Types.ObjectId,
        required: true
    })
    ofertaEmpleoId: mongoose.Schema.Types.ObjectId;

    @Prop({
        required: false
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