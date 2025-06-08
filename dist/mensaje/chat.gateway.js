"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const mensaje_service_1 = require("./mensaje.service");
let ChatGateway = class ChatGateway {
    constructor(mensajeService) {
        this.mensajeService = mensajeService;
    }
    afterInit(server) {
        console.log('WebSocket server initialized');
    }
    handleConnection(client) {
        console.log(`Client connected: ${client.id}`);
    }
    handleDisconnect(client) {
        console.log(`Client disconnected: ${client.id}`);
    }
    handleJoinConversation(conversationId, client) {
        if (!conversationId || typeof conversationId !== 'string') {
            client.emit('error', 'Invalid conversation ID');
            return;
        }
        client.join(conversationId);
        client.emit('joined_conversation', conversationId);
        console.log(`Client ${client.id} joined conversation: ${conversationId}`);
    }
    async handleSendMessage(payload, client) {
        console.log('Evento send_message recibido:', payload);
        try {
            const nuevoMensaje = await this.mensajeService.crear(payload);
            this.server.to(payload.conversationId).emit('new_message', nuevoMensaje);
        }
        catch (error) {
            console.error('Error al enviar el mensaje:', error);
            client.emit('message_error', { error: 'No se pudo enviar el mensaje' });
        }
    }
    handleMessageSeen(data) {
        console.log('Evento message_seen recibido:', data);
        this.server.to(data.conversationId).emit('message_seen', data);
    }
    async handleMarkAsRead(data, client) {
        console.log('Evento mark_as_read recibido:', data);
        await this.mensajeService.marcarComoLeido(data.messageId, data.userId);
        this.server.to(data.conversationId).emit('message_read', data);
    }
};
exports.ChatGateway = ChatGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], ChatGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('join_conversation'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], ChatGateway.prototype, "handleJoinConversation", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('send_message'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleSendMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('message_seen'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ChatGateway.prototype, "handleMessageSeen", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('mark_as_read'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleMarkAsRead", null);
exports.ChatGateway = ChatGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        cors: {
            origin: '*',
        },
    }),
    __metadata("design:paramtypes", [mensaje_service_1.MensajeService])
], ChatGateway);
//# sourceMappingURL=chat.gateway.js.map