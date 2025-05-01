import { UserDocument } from 'src/users/schema/user.schema';
export declare class CrearMensajeDto {
    idUser: UserDocument;
    destinatarioId: UserDocument;
    contenido: string;
    archivo?: string;
}
