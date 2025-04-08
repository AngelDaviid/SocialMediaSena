import { Schema, SchemaFactory, Prop } from  '@nestjs/mongoose'
import mongoose from 'mongoose';

@Schema({
    timestamps: true
})

export class Evento{

    @Prop({
        Type: mongoose.Schema.Types.ObjectId,
        required: true
        })
    idUsuario: mongoose.Schema.Types.ObjectId;
    @Prop({
        required: true
    })
    nombre: string; 

    @Prop({
        require: true
    })
    descripion: string; 

    @Prop({
        require: true
    })
    categoria: string;

    @Prop({
        required: true,
    })
    fechaHora: string; 

    @Prop({
        required: true
    })
    lugar: string;

    @Prop({
        required: true
    })
    inscritos: number;

}

export const EventoSchema = SchemaFactory.createForClass(Evento)
