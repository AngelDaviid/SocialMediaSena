import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator'

export class ActualizarUserDto{
    @IsString()
    rol?:string;

    @IsString()
    @IsNotEmpty()
    nombre?:string;

    @IsEmail()
    @IsNotEmpty()
    correoElectronico?:string;

    @MinLength(4)
    @MaxLength(6)
    password?:string;

}
