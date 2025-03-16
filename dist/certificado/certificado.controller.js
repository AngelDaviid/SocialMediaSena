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
exports.CertificadoController = void 0;
const common_1 = require("@nestjs/common");
const certificado_service_1 = require("./certificado.service");
const certificado_dto_1 = require("./dto/certificado.dto");
const actualizarCertificado_dto_1 = require("./dto/actualizarCertificado.dto");
let CertificadoController = class CertificadoController {
    constructor(certificadoService) {
        this.certificadoService = certificadoService;
    }
    findAll() {
        return this.certificadoService.findAll();
    }
    async findOne(id) {
        const certificado = await this.certificadoService.findOne(id);
        if (!certificado)
            throw new common_1.NotFoundException('Certificado no encontrado');
        return certificado;
    }
    async crear(body) {
        const certificado = await this.certificadoService.crear(body);
        if (!certificado)
            throw new common_1.NotFoundException('Certificado no encontrado');
        return certificado;
    }
    async actualizar(id, actualizarCertificado) {
        const certificado = await this.certificadoService.actualizar(id, actualizarCertificado);
        if (!certificado)
            throw new common_1.NotFoundException('Certificado no encontrado');
        return certificado;
    }
    async eliminar(id) {
        const certificado = await this.certificadoService.eliminar(id);
        if (!certificado)
            throw new common_1.NotFoundException('Certificado no encontrado');
        return certificado;
    }
};
exports.CertificadoController = CertificadoController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CertificadoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CertificadoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [certificado_dto_1.CrearCertificadoDto]),
    __metadata("design:returntype", Promise)
], CertificadoController.prototype, "crear", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, actualizarCertificado_dto_1.ActualizarCertificadoDto]),
    __metadata("design:returntype", Promise)
], CertificadoController.prototype, "actualizar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CertificadoController.prototype, "eliminar", null);
exports.CertificadoController = CertificadoController = __decorate([
    (0, common_1.Controller)('certificado'),
    __metadata("design:paramtypes", [certificado_service_1.CertificadoService])
], CertificadoController);
//# sourceMappingURL=certificado.controller.js.map