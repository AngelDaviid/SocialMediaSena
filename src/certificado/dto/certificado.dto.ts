import { IsNotEmpty, IsString } from 'class-validator';

export class CrearCertificadoDto {
  @IsNotEmpty()
  eventoOCursoId: string; //IEvento (modulo evento)

  @IsString()
  @IsNotEmpty()
  fechaEmision: string;

  @IsString()
  @IsNotEmpty()
  enlaceDescarga: string;
}
