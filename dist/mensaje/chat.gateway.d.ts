import { OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { MensajeService } from './mensaje.service';
import { CrearMensajeDto } from './dto/mensaje.dto';
export declare class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private readonly mensajeService;
    server: Server;
    constructor(mensajeService: MensajeService);
    afterInit(server: Server): void;
    handleConnection(client: Socket): void;
    handleDisconnect(client: Socket): void;
    handleJoinConversation(conversationId: string, client: Socket): void;
    handleSendMessage(payload: CrearMensajeDto & {
        conversationId: string;
    }, client: Socket): Promise<void>;
    handleMessageSeen(data: {
        conversationId: string;
        userId: string;
    }): void;
    handleMarkAsRead(data: {
        messageId: string;
        userId: string;
        conversationId: string;
    }, client: Socket): Promise<void>;
}
