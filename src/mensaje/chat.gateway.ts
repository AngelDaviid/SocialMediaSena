import { 
    WebSocketGateway, 
    SubscribeMessage, 
    OnGatewayInit,
    OnGatewayConnection, 
    OnGatewayDisconnect, 
    MessageBody,
    ConnectedSocket,
    WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { MensajeService } from './mensaje.service';
import { CrearMensajeDto } from './dto/mensaje.dto';

@WebSocketGateway({
    cors: {
        origin: '*',
    },
})
export class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server: Server;

    constructor(private readonly mensajeService: MensajeService) {}

    afterInit(server: Server){
        console.log('WebSocket server initialized');
    }

    handleConnection(client: Socket) {
        console.log(`Client connected: ${client.id}`);
    }

    handleDisconnect(client: Socket) {
        console.log(`Client disconnected: ${client.id}`);
    }

    @SubscribeMessage('join_conversation')
    handleJoinConversation(@MessageBody() conversationId: string, @ConnectedSocket() client: Socket) {
        if(!conversationId || typeof conversationId !== 'string'){
            client.emit('error', 'Invalid conversation ID');
            return;
        }
        client.join(conversationId);
        client.emit('joined_conversation', conversationId);
        console.log(`Client ${client.id} joined conversation: ${conversationId}`);
    }

    @SubscribeMessage('send_message')
    async handleSendMessage(@MessageBody() payload: CrearMensajeDto & { conversationId: string}, @ConnectedSocket() client: Socket){
        console.log('Evento send_message recibido:', payload)
        try { 
            const nuevoMensaje = await this.mensajeService.crear(payload);
            this.server.to(payload.conversationId).emit('new_message', nuevoMensaje);
        } catch (error) {
            console.error('Error al enviar el mensaje:', error);
            client.emit('message_error', { error: 'No se pudo enviar el mensaje'});
        }
    }

    @SubscribeMessage('message_seen')
    handleMessageSeen(@MessageBody() data: { conversationId: string, userId: string}){
        console.log('Evento message_seen recibido:', data);
        this.server.to(data.conversationId).emit('message_seen', data);
    }

    @SubscribeMessage('mark_as_read')
    async handleMarkAsRead(
        @MessageBody() data: { messageId: string, userId: string, conversationId: string },
        @ConnectedSocket() client: Socket,
    ){
        console.log('Evento mark_as_read recibido:', data);
        await this.mensajeService.marcarComoLeido(data.messageId, data.userId);
        this.server.to(data.conversationId).emit('message_read', data);
    }   
}