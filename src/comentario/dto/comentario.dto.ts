import { IsUUID, IsString, IsNotEmpty, IsDate } from 'class-validator';

export class ComentarioDto {
  @IsUUID()
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsUUID()
  @IsString()
  @IsNotEmpty()
  publicacionId: string;

  @IsString()
  @IsNotEmpty()
  contenido: string;

  @IsDate()
  @IsNotEmpty()
  fechaCreacion: Date;
}
