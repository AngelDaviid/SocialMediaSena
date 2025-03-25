import {  IsString, IsNotEmpty, IsEnum } from 'class-validator';

export enum EstadoEmpleo {
    ACTIVO = 'activo',
    CERRADO = 'cerrado',
}

export class ActualizarEmpleoDto {
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
    ubicacion?: string;

    @IsEnum(EstadoEmpleo)
    @IsNotEmpty()
    estado?: EstadoEmpleo;
}