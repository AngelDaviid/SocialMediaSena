import { IsArray, IsOptional, IsString, IsBoolean } from 'class-validator';

export class CreateConvesationDto{
    @IsArray()
    participants: string[];

    @IsOptional()
    @IsBoolean()
    isGroup?: boolean;

    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    image?: string;
}