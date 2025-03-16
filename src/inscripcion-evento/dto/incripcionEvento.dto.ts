import { IsString, IsUUID, IsNotEmpty, IsDate } from 'class-validator';

export class InscripcionEventoDto {
  @IsUUID()
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsUUID()
  @IsString()
  @IsNotEmpty()
  eventoId: string;

  @IsDate()
  @IsNotEmpty()
  fechaInscripcion: Date;
}
