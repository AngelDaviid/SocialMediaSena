import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
    timestamps: true,
})

export class Publicacion{
    @Prop({
        unique: true,
        required: true
    })
    id: string;

    @Prop({
        required: true
    })
    contenido: string;

    @Prop({
        required: true
    })
    categoria: string;

    /*@Prop({
        required: true
    })
    fechaCreacion: Date;*/

    @Prop({
        required: true
    })
    numeroReacciones: number;

    @Prop({
        required: true
    })
    numeroComentarios: number;
}

export const PublicacionSchema = SchemaFactory.createForClass(Publicacion)
