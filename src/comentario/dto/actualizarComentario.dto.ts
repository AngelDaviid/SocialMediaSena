import { IsString, IsNotEmpty } from 'class-validator';

export class ActualizarComentarioDto {
  @IsString()
  @IsNotEmpty()
  contenido?: string;
}
