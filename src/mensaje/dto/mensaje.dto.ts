import { IsUUID, IsString, IsNotEmpty, IsDate } from 'class-validator';

export class CrearMensajeDto {

  @IsString()
  @IsNotEmpty()
  idUser: string;


  @IsString()
  @IsNotEmpty()
  remitenteId: string;


  @IsString()
  @IsNotEmpty()
  destinatarioId: string;

  @IsString()
  @IsNotEmpty()
  contenido: string;

  /*@IsDate()
  @IsNotEmpty()
  fechaEnvio: Date;*/
}
