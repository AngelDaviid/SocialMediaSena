import {  IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { UserDocument } from 'src/users/schema/user.schema';

export enum EstadoEmpleo {
  ACTIVO = 'activo',
  CERRADO = 'cerrado',
}

export class CrearEmpleoDto {
  @IsString()
  @IsNotEmpty()
  iduser: UserDocument;

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

  @IsEnum(EstadoEmpleo)
  @IsNotEmpty()
  estado: EstadoEmpleo;
}
