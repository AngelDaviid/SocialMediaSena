import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema({
    timestamps: true,
})

export class User{
    @Prop({
        required: true,
        unique: true
    })
    username: string;

    @Prop({
        required: true,
        unique: true,
    })
    nombre:string;

    @Prop({
        required: true,
        unique: true,
    })
    Email:string;

    @Prop({
        required: true,
    })
    password:string;

    @Prop({
        required: true,
    })
    rol:string;

    @Prop({
        required: true,
    })
    fotoPerfil:string;

    @Prop({
        required: true,
    })
    biografia:string;   

    @Prop({
        required: true,
    })
    habilidadesCursos:string[];

    @Prop({
        required: true,
    })
    experienciaLaboral:string[];    
}

export const UserSchema = SchemaFactory.createForClass(User);