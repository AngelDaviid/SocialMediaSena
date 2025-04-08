import { IsString, IsNotEmpty, IsEnum, IsNumber } from 'class-validator';
import { UserDocument } from 'src/users/schema/user.schema';

export enum CategoriaEvento {
  CHARLA = 'charla',
  HACKATON = 'hackaton',
  TALLER = 'taller',
  OTROS = 'otros',
}

export class CrearEventoDto {

  @IsNotEmpty()
  idUsuario: UserDocument;

  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsEnum(CategoriaEvento)
  @IsNotEmpty()
  categoria: CategoriaEvento;

  @IsString()
  @IsNotEmpty()
  fechaHora: string;

  @IsString()
  @IsNotEmpty()
  lugar: string;

  @IsNumber()
  @IsNotEmpty()
  inscritos: number;


}
