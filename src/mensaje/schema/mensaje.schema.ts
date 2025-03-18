import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema ({
    timestamps: true,
})
export class Mensaje{
    @Prop({
        unique: true,
        required: true
    })
    idUser: string;

    @Prop({
        required: true
    })
    remitenteId: string;

    @Prop({
        required: true
    })
    destinatarioId: string;

    @Prop({
        required: true
    })
    contenido: string;
}

export const MensajeSchema = SchemaFactory.createForClass(Mensaje)