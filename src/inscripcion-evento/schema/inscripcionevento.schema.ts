import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";


@Schema({
    timestamps: true,
})
export class InscripcionEvento{

    @Prop({
        Type: mongoose.Schema.Types.ObjectId,
        required: true
    })
    iduser: mongoose.Schema.Types.ObjectId;

    @Prop({
        Type: mongoose.Schema.Types.ObjectId,
        required: true
    })
    eventoId: mongoose.Schema.Types.ObjectId;

    @Prop({
        required: true
    })
    estado: string;

    @Prop({
        required: true
    })
    tipoinscripcion: string;
}

export const InscripcionEventoSchema = SchemaFactory.createForClass(InscripcionEvento)