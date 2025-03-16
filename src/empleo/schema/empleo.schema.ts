import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose'

@Schema({
    timestamps:true
})

export class Empleo{
    @Prop({
        required: true
    })
    empresa: string;

    @Prop({
        require:true
    })
    cargo: string;

    @Prop({
        required:true
    })
    descripcion: string;

    @Prop({
        required: true
    })
    requisitos: string;

    @Prop({
        required:true
    })
    ubicacion: string;

    @Prop({
        required: true
    })
    estado: string;
}

export const EmpleoSchema = SchemaFactory.createForClass(Empleo)