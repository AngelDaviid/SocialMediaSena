import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })

export class Conversation extends Document {
    @Prop({ type: [{ type: Types.ObjectId, ref: 'User' }], required: true })
    participants: Types.ObjectId[];

    @Prop({ default: false })
    isGroup: boolean;

    @Prop({ type: Types.ObjectId, ref: 'Mensaje', default: null })
    lastMessage: Types.ObjectId;

    @Prop({ type:String})
    name? : string;

    @Prop({ type:String})
    image? : string;

    @Prop({ default: null })
    lastUpdatedBy?: string;

    
}

export const ConversationSchema = SchemaFactory.createForClass(Conversation);
