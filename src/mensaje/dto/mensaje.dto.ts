import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { UserDocument } from 'src/users/schema/user.schema';

export class CrearMensajeDto {

  @IsString()
  @IsNotEmpty()
  idUser: UserDocument;

  @IsString()
  @IsNotEmpty()
  destinatarioId: UserDocument;

  @IsString()
  @IsNotEmpty()
  contenido: string;

  @IsString()
  @IsOptional()
  archivo?: string;

  @IsString()
  @IsOptional()
  conversationId: string;

  /*@IsDate()
  @IsNotEmpty()
  fechaEnvio: Date;*/
}
