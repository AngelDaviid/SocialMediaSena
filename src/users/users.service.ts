import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import { CrearUsuarioDto } from './dto/users.dto';
import { ActualizarUserDto } from './dto/ActualizarUser.dto';
import { InjectModel } from '@nestjs/mongoose';
import  * as bcrypt from 'bcrypt';	

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private userModel: Model<User>) {}

    findAll(){
        return this.userModel.find().exec();
    }

    async crear(crearUserDto: CrearUsuarioDto){
        try{
            const hashedPassword = await bcrypt.hash(crearUserDto.password, 10);
            const user = new this.userModel({ ...crearUserDto, password: hashedPassword });
            return await user.save();
        }catch (error){
            if (error.code === 11000){
                throw new ConflictException('El usuario ya existe');
            }
            throw new InternalServerErrorException('Error en el servidor');
        }
    }


    async findOneById(id: string){
        return await this.userModel.findById(id).exec();
    }

    async findOne(nombre: string){
        return await this.userModel.findOne({nombre}).exec();
    }

    async Eliminar(id:string){
        return await this.userModel.findByIdAndDelete(id).exec();
    }

    async Actualizar(id:string, actualizarUserDto: ActualizarUserDto){
        return await this.userModel.findByIdAndUpdate(id, actualizarUserDto, { new:true }).exec();
    }
}
