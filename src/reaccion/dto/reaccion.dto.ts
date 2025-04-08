import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { Comentario } from 'src/comentario/schema/comentario.schema';
import { Publicacion } from 'src/publicacion/schema/publicacion.schema';

export enum TipoReaccion {
  ME_GUSTA = 'Me gusta',
  INTERESANTE = 'Interesante',
  UTIL = 'Util',
}

export class ReaccionDto {

  publicacionId?: Publicacion;//IPublicacion (Modulo publicacion)
  
  ComentarioId?: Comentario;

  @IsEnum(TipoReaccion)
  @IsNotEmpty()
  tipoReaccion?: TipoReaccion;
}