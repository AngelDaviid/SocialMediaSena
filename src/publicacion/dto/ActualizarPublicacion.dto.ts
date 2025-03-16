import { IsNotEmpty, IsString } from 'class-validator'

export class ActualizarPublicacionDto {
    @IsString()
    @IsNotEmpty()
    contenido?: string;


}