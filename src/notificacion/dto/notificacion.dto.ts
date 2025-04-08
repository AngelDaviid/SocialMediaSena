import { IsNotEmpty, IsString, IsEnum } from 'class-validator';
import { Comentario } from 'src/comentario/schema/comentario.schema';
import { Empleo } from 'src/empleo/schema/empleo.schema';
import { Evento } from 'src/evento/schema/evento.schema';
import { Mensaje } from 'src/mensaje/schema/mensaje.schema';
import { Publicacion } from 'src/publicacion/schema/publicacion.schema';
import { Reaccion } from 'src/reaccion/schema/reaccion.schema';
import { UserDocument } from 'src/users/schema/user.schema';

export enum TipoNotificacion {
  NUEVA_PUBLICACION = 'nueva publicación',
  EMPLEO = 'empleo',
  MENSAJE = 'mensaje',
  COMENTARIO = 'comentario',
  REACCION = 'reaccion',
  OTROS = 'otros',
  
}

export class CrearNotificacionDto {
  
  @IsNotEmpty()
  iduser: UserDocument;


  idreaccion?: Reaccion;


  idpublicacion?: Publicacion;


  Idmensaje?: Mensaje;


  idevento?: Evento;


  idcomentario?: Comentario;

  idempleo?: Empleo;

  @IsString()
  @IsNotEmpty()
  mensaje: string;

  @IsEnum(TipoNotificacion)
  @IsNotEmpty()
  tipo: TipoNotificacion;
}