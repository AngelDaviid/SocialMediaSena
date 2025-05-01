import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import mongoose, { Schema as MongooseSchema } from "mongoose";

@Schema({ timestamps: true })
export class Comentario {
  @Prop({
    Type: mongoose.Schema.Types.ObjectId,
    required: true
  })
  id:mongoose.Schema.Types.ObjectId;

  @Prop({
    Type: mongoose.Schema.Types.ObjectId,
    required: true
  })
  publicacionId: mongoose.Schema.Types.ObjectId;

  @Prop({
    required: true
  })
  contenido: string;
  
  @Prop({
    required: false
  })
  archivo: string;
}

export const ComentarioSchema = SchemaFactory.createForClass(Comentario);
