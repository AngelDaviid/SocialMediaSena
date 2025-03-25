import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

@Schema({
    timestamps:true
})

export class Certificado{
    @Prop({
        required:true
    })
    eventoOCursoId: string; 

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