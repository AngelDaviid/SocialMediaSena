import { UserDocument } from 'src/users/schema/user.schema';
export declare enum TipoLogro {
    PARTICIPACION = "participaci\u00F3n",
    CONTRIBUCION = "contribuci\u00F3n",
    LOGRO_DESTACADO = "logro destacado",
    OTROS = "otros"
}
export declare class GamificacionDto {
    tipoLogro: TipoLogro;
    descripcion: string;
    idUsuario: UserDocument;
}
