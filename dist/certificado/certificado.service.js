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
exports.CertificadoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let CertificadoService = class CertificadoService {
    constructor(certificadoModel) {
        this.certificadoModel = certificadoModel;
    }
    findAll() {
        return this.certificadoModel.find();
    }
    findOne(id) {
        return this.certificadoModel.findById(id);
    }
    async crear(crearCertificado) {
        const certificado = new this.certificadoModel(crearCertificado);
        return certificado.save();
    }
    async actualizar(id, actualizarCertificado) {
        return await this.certificadoModel.findByIdAndUpdate(id, actualizarCertificado, { new: true });
    }
    async eliminar(id) {
        return await this.certificadoModel.findByIdAndDelete(id);
    }
};
exports.CertificadoService = CertificadoService;
exports.CertificadoService = CertificadoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Certificado')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CertificadoService);
//# sourceMappingURL=certificado.service.js.map