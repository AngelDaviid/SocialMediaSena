import { Evento } from 'src/evento/schema/evento.schema';
import { UserDocument } from 'src/users/schema/user.schema';
export declare class CrearCertificadoDto {
    IdUser: UserDocument;
    eventoOCursoId: Evento;
    fechaEmision: string;
    enlaceDescarga: string;
}
