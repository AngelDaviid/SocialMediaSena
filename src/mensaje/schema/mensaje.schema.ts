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

    @Prop({
        required: false,
    })
    archivo: string;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Conversation',
        required: true
    })
    conversationId: mongoose.Schema.Types.ObjectId;

    @Prop({
        default: false
    })
    isRead: boolean;

    @Prop({})
    readAt: Date;
}

export const MensajeSchema = SchemaFactory.createForClass(Mensaje)