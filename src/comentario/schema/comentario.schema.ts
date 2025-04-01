import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import { Schema as MongooseSchema } from "mongoose";

@Schema({ timestamps: true })
export class Comentario {
  @Prop({
    required: true
  })
  id:string;

  @Prop({
    required: true
  })
  publicacionId: string;

  @Prop({
    required: true
  })
  contenido: string;
}

export const ComentarioSchema = SchemaFactory.createForClass(Comentario);
