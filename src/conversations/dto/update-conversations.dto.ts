import { IsOptional, IsString, IsBoolean, IsArray } from 'class-validator';

export class UpdateConversationDto {

    @IsOptional()
    @IsString()
    name?: string;
    
    @IsOptional()
    @IsBoolean()
    isGroup?: boolean;
    
    @IsOptional()
    @IsString()
    image?: string;

    @IsOptional()
    @IsArray()
    participants?: string[];
}