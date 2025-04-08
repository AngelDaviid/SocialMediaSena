import { Comentario } from 'src/comentario/schema/comentario.schema';
import { Publicacion } from 'src/publicacion/schema/publicacion.schema';
export declare enum TipoReaccion {
    ME_GUSTA = "Me gusta",
    INTERESANTE = "Interesante",
    UTIL = "Util"
}
export declare class ReaccionDto {
    publicacionId?: Publicacion;
    ComentarioId?: Comentario;
    tipoReaccion?: TipoReaccion;
}
