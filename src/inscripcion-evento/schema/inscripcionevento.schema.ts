import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({
    timestamps: true,
})
export class InscripcionEvento{

    @Prop({
        required: true
    })
    eventoId: string;

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