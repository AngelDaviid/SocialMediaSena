import { Evento } from 'src/evento/schema/evento.schema';
import { UserDocument } from 'src/users/schema/user.schema';
export declare enum EstadoInscripcion {
    PENDIENTE = "pendiente",
    CONFIRMADA = "confirmada",
    CANCELADA = "cancelada"
}
export declare enum TipoInscripcion {
    CURSO_CORTO = "Curso Corto",
    SEMILLERO = "Semillero",
    SENNOVA = "SENNOVA",
    TECNOLOGO = "Tecnologo"
}
export declare class InscripcionEventoDto {
    iduser: UserDocument;
    eventoId: Evento;
    estado: string;
    tipoinscripcion: string;
}
