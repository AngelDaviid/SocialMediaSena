  import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
  import { Schema as MongooseSchema } from "mongoose";

  @Schema({ timestamps: true })
  export class Reaccion {
    @Prop({ required: true, type: MongooseSchema.Types.ObjectId, refPath: 'tipoEntidad' })
    entidadId: string; 

    @Prop({ required: true, enum: ['publicacion', 'comentario'] })
    tipoEntidad: string; 
    @Prop({ required: true, enum: ['like', 'love', 'haha', 'angry'] })
    tipoReaccion: string; 
  }

  export const ReaccionSchema = SchemaFactory.createForClass(Reaccion);
