import { IsString, IsNotEmpty,  } from 'class-validator';
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
}
