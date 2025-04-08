  import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
  import mongoose, { mongo, Schema as MongooseSchema } from "mongoose";
import { MonoTypeOperatorFunction } from "rxjs";

  @Schema({ timestamps: true })
  export class Reaccion {
    @Prop({ 
      
      type: mongoose.Types.ObjectId
    })
    publicacionId?: mongoose.Types.ObjectId;

    @Prop({ 
      
      type: mongoose.Types.ObjectId
    })
    ComentarioId?: mongoose.Types.ObjectId;

    @Prop({ 
      required: true
    })
    tipoReaccion: string;
  }

  export const ReaccionSchema = SchemaFactory.createForClass(Reaccion);
