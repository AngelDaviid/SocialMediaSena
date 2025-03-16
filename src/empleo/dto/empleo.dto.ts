import { IsUUID, IsString, IsNotEmpty, IsDate, IsEnum } from 'class-validator';

export enum EstadoEmpleo {
  ACTIVO = 'activo',
  CERRADO = 'cerrado',
}

export class EmpleoDto {
  @IsUUID()
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  empresa: string;

  @IsString()
  @IsNotEmpty()
  cargo: string;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsString()
  @IsNotEmpty()
  requisitos: string;

  @IsString()
  @IsNotEmpty()
  ubicacion: string;

  @IsDate()
  @IsNotEmpty()
  fechaPublicacion: Date;

  @IsEnum(EstadoEmpleo)
  @IsNotEmpty()
  estado: EstadoEmpleo;
}
