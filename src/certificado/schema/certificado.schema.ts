import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({
    timestamps:true
})

export class Certificado{

    @Prop({
        Type: mongoose.Schema.Types.ObjectId,
        required:true
    })
    IdUser: mongoose.Schema.Types.ObjectId;
    @Prop({
        Type: mongoose.Schema.Types.ObjectId,
        required:true
    })
    eventoOCursoId: mongoose.Schema.Types.ObjectId; 

    @Prop({
        required:true
    })
    fechaEmision: string;

    @Prop({
        required:true
    })
    enlaceDescarga: string;
}

export const CertificadoSchema = SchemaFactory.createForClass(Certificado)