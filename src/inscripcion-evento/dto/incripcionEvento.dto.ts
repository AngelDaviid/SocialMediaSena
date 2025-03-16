import { IsString, IsUUID, IsNotEmpty } from 'class-validator';

export class InscripcionEventoDto {
  @IsUUID()
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsUUID()
  @IsString()
  @IsNotEmpty()
  eventoId: string; //Tipo IEvente (modulo evento)

}
