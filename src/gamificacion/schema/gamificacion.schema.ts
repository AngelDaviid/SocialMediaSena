import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


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
        required: true
    })
    idUsuario: string;
}

export const GamificacionSchema = SchemaFactory.createForClass(Gamificacion)