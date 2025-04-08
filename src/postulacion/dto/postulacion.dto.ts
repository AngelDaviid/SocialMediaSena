import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { Empleo } from 'src/empleo/schema/empleo.schema';
import { UserDocument } from 'src/users/schema/user.schema';

export enum EstadoPostulacion {
  PENDIENTE = 'pendiente',
  APROBADO = 'aprobado',
  RECHAZADO = 'rechazado',
}

export class CrearPostulacionDto{

  @IsNotEmpty()
  iduser: UserDocument;
  
  @IsNotEmpty()
  ofertaEmpleoId: Empleo; //Tipo IEmpleo (modulo empleo)

  @IsString()
  @IsNotEmpty()
  cvAdjunto: string;

  @IsString()
  @IsNotEmpty()
  mensajePresentacion: string;

  @IsEnum(EstadoPostulacion)
  @IsNotEmpty()
  estado: EstadoPostulacion;
}
