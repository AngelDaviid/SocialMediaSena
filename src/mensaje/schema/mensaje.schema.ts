import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";


@Schema ({
    timestamps: true,
})
export class Mensaje{
    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        required: true
    })
    idUser: mongoose.Schema.Types.ObjectId;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        required: true
    })
    destinatarioId: mongoose.Schema.Types.ObjectId;

    @Prop({
        required: true
    })
    contenido: string;
}

export const MensajeSchema = SchemaFactory.createForClass(Mensaje)