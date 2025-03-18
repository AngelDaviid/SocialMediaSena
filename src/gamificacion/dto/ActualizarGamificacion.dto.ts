import { IsNotEmpty, IsString } from 'class-validator'

export class ActualizarGamificacionDto {
    @IsString()
    @IsNotEmpty()
    tipoLogro?: string;

    @IsString()
    @IsNotEmpty()
    descripcion?: string;
}