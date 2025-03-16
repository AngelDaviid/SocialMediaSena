import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose"

@Schema({
    timestamps: true
})

export class Reaccion{
    @Prop({
        required:true,
    })
    publicacionOComentarioId:string;

    @Prop({
        required:true
    })
    tipoReaccion: string;

}


export const ReaccionSchema = SchemaFactory.createForClass(Reaccion)
