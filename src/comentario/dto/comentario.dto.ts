import { IsString, IsNotEmpty, IsOptional,  } from 'class-validator';
import { Publicacion } from 'src/publicacion/schema/publicacion.schema';
import { UserDocument } from 'src/users/schema/user.schema';

export class ComentarioDto {

  @IsNotEmpty()
  id: UserDocument;
  
  @IsNotEmpty()
  publicacionId: Publicacion;

  @IsString()
  @IsNotEmpty()
  contenido: string;

  @IsString()
  @IsOptional()
  archivo?: string;

}
