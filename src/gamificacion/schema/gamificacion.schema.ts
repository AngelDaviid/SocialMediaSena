import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";


@Schema ({
    timestamps: true,
})
export class Gamificacion{

    @Prop({
        required: true
    })
    tipoLogro: string;

    @Prop({
        required: true
    })
    descripcion: string;

    @Prop({
        Type: mongoose.Schema.Types.ObjectId,
        required: true
    })
    idUsuario: mongoose.Schema.Types.ObjectId;
}

export const GamificacionSchema = SchemaFactory.createForClass(Gamificacion)