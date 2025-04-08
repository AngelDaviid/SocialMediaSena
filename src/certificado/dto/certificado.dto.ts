import { IsNotEmpty, IsString } from 'class-validator';
import { Evento } from 'src/evento/schema/evento.schema';
import { UserDocument } from 'src/users/schema/user.schema';

export class CrearCertificadoDto {

  @IsNotEmpty()
  IdUser: UserDocument;

  @IsNotEmpty()
  eventoOCursoId: Evento; //IEvento (modulo evento)

  @IsString()
  @IsNotEmpty()
  fechaEmision: string;

  @IsString()
  @IsNotEmpty()
  enlaceDescarga: string;
}
