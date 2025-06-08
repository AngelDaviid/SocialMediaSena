import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MensajeSchema } from './schema/mensaje.schema';
import { MensajeController } from './mensaje.controller';
import { MensajeService } from './mensaje.service';
import { ConversationsModule } from 'src/conversations/conversations.module';
import { Conversation, ConversationSchema } from 'src/conversations/schema/conversatios.schema';
import { ChatGateway } from './chat.gateway';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Mensaje', schema: MensajeSchema },
                                        {name: Conversation.name , schema: ConversationSchema }
    ]), ConversationsModule],
    controllers: [MensajeController],
    providers: [MensajeService, ChatGateway]
})
export class  MensajeModule {}