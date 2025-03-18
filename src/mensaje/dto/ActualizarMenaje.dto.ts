import { IsNotEmpty, IsString } from 'class-validator'

export class ActualizarMensajeDto {
    @IsString()
    @IsNotEmpty()
    contenido?: string;
}