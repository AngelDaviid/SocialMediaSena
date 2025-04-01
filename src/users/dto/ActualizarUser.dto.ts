import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator'

export class ActualizarUserDto{
    @IsString()
    username?:string

    @IsString()
    rol?:string;

    @IsString()
    nombre?:string;

    @IsEmail()
    correoElectronico?:string;

    @MinLength(4)
    @MaxLength(6)
    password?:string;

}
