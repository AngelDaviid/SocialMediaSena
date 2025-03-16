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

    @Prop({
        required: true
    })
    numeroReacciones: number; //Tipo IReaccion (Modulo de reaccion)

    @Prop({
        required: true
    })
    numeroComentarios: number; //Tipo IComentario (Modulo de comentario)
}

export const PublicacionSchema = SchemaFactory.createForClass(Publicacion)
