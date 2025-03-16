import { IsUUID, IsString, IsNotEmpty, IsDate } from 'class-validator';

export class MensajeDto {
  @IsUUID()
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsUUID()
  @IsString()
  @IsNotEmpty()
  remitenteId: string;

  @IsUUID()
  @IsString()
  @IsNotEmpty()
  destinatarioId: string;

  @IsString()
  @IsNotEmpty()
  contenido: string;

  @IsDate()
  @IsNotEmpty()
  fechaEnvio: Date;
}
