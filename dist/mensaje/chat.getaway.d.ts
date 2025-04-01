import { Server, Socket } from "socket.io";
export declare class ChatGateway {
    server: Server;
    handleJoinRoom(room: string, client: Socket): void;
    handleMessage(data: {
        room: string;
        usuario: string;
        mensaje: string;
    }, client: Socket): void;
}
