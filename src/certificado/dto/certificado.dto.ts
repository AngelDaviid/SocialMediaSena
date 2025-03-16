import { IsUUID, IsNotEmpty, IsDate, IsString } from 'class-validator';

export class CertificadoDto {
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @IsUUID()
  @IsNotEmpty()
  eventoOCursoId: string;

  @IsDate()
  @IsNotEmpty()
  fechaEmision: Date;

  @IsString()
  @IsNotEmpty()
  enlaceDescarga: string;
}
