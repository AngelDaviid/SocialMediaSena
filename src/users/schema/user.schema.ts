import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema({
    timestamps: true,
})

export class User{
    @Prop({
        required: true,
        unique: true,
    })
    nombre:string;

    @Prop({
        required: true,
        unique: true,
    })
    correoElectronico:string;

    @Prop({
        required: true,
        unique: true,
    })
    password:string;

    @Prop({
        required: true,
        unique: true,
    })
    rol:string;

    @Prop({
        required: true,
        unique: true,
    })
    fotoPerfil:string;

    @Prop({
        required: true,
        unique: true,
    })
    biografia:string;   

    @Prop({
        required: true,
        unique: true,
    })
    habilidadesCursos:string[];

    @Prop({
        required: true,
        unique: true,
    })
    experienciaLaboral:string[];    
}

export const UserSchema = SchemaFactory.createForClass(User);