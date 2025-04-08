import { Publicacion } from 'src/publicacion/schema/publicacion.schema';
import { UserDocument } from 'src/users/schema/user.schema';
export declare class ComentarioDto {
    id: UserDocument;
    publicacionId: Publicacion;
    contenido: string;
}
