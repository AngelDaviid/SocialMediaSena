import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose'
import mongoose from 'mongoose'

@Schema({
    timestamps: true
})

export class Notificacion {

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    })
    iduser: mongoose.Schema.Types.ObjectId

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
    
    })
    idreaccion: mongoose.Schema.Types.ObjectId

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        
    })
    idpublicacion: mongoose.Schema.Types.ObjectId

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
       
    })
    Idmensaje: mongoose.Schema.Types.ObjectId

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        
    })
    idevento: mongoose.Schema.Types.ObjectId

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        
    })
    idcomentario: mongoose.Schema.Types.ObjectId

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
       
    })
    idempleo: mongoose.Schema.Types.ObjectId

    @Prop({ required: true })
    mensaje: string

    @Prop({ required: true })
    tipo: string
}

export const NotificacionSchema = SchemaFactory.createForClass(Notificacion)