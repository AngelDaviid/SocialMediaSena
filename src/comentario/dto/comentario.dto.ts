import { IsString, IsNotEmpty,  } from 'class-validator';

export class ComentarioDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  publicacionId: string;

  @IsString()
  @IsNotEmpty()
  contenido: string;
}
