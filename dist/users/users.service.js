"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    findAll() {
        return this.userModel.find().exec();
    }
    async crear(crearUserDto) {
        try {
            const hashedPassword = await bcrypt.hash(crearUserDto.password, 10);
            const user = new this.userModel({ ...crearUserDto, password: hashedPassword });
            return await user.save();
        }
        catch (error) {
            if (error.code === 11000) {
                throw new common_1.ConflictException('El usuario ya existe');
            }
            throw new common_1.InternalServerErrorException('Error en el servidor');
        }
    }
    async findOneById(id) {
        return await this.userModel.findById(id).exec();
    }
    async findOne(nombre) {
        return await this.userModel.findOne({ nombre }).exec();
    }
    async Eliminar(id) {
        return await this.userModel.findByIdAndDelete(id).exec();
    }
    async Actualizar(id, actualizarUserDto) {
        return await this.userModel.findByIdAndUpdate(id, actualizarUserDto, { new: true }).exec();
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('User')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UsersService);
//# sourceMappingURL=users.service.js.map