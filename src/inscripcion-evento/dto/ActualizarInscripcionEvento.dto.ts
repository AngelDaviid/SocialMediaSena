import { IsNotEmpty, IsString } from 'class-validator'

export class ActualizarGamificacionDto {
    @IsString()
    @IsNotEmpty()
    estado?: string;
}