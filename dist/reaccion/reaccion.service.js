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
exports.ReaccionService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let ReaccionService = class ReaccionService {
    constructor(reaccionModel) {
        this.reaccionModel = reaccionModel;
    }
    findAll() {
        return this.reaccionModel.find();
    }
    findOne(id) {
        return this.reaccionModel.findById(id);
    }
    async crear(crearReaccionDto) {
        const reaccion = new this.reaccionModel(crearReaccionDto);
        return reaccion.save();
    }
    async actualizar(id, body) {
        return await this.reaccionModel.findByIdAndUpdate(id, body, { new: true });
    }
    async eliminar(id) {
        return await this.reaccionModel.findByIdAndDelete(id);
    }
    async agregarReaccion(entidadId, tipoEntidad, tipoReaccion) {
        const reaccion = new this.reaccionModel({ entidadId, tipoEntidad, tipoReaccion });
        return reaccion.save();
    }
};
exports.ReaccionService = ReaccionService;
exports.ReaccionService = ReaccionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Reaccion')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ReaccionService);
//# sourceMappingURL=reaccion.service.js.map