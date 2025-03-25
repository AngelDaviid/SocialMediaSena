import { IsNotEmpty, IsString } from 'class-validator';

export class ActualizarCertificadoDto {
  @IsString()
  @IsNotEmpty()
  fechaEmision?: string;

  @IsString()
  @IsNotEmpty()
  enlaceDescarga?: string;
}
