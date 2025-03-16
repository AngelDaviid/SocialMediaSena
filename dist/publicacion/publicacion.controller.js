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
exports.PublicacionController = void 0;
const common_1 = require("@nestjs/common");
const publicacion_service_1 = require("./publicacion.service");
const publicacion_dto_1 = require("./dto/publicacion.dto");
const ActualizarPublicacion_dto_1 = require("./dto/ActualizarPublicacion.dto");
let PublicacionController = class PublicacionController {
    constructor(publicacionService) {
        this.publicacionService = publicacionService;
    }
    findAll() {
        return this.publicacionService.findAll();
    }
    findOne(id) {
        return this.publicacionService.findOne(id);
    }
    async Crear(body) {
        try {
            return await this.publicacionService.crear(body);
        }
        catch (error) {
            if (error.code === 11000) {
                return { error: 'Publicacion ya existe' };
            }
            return { error: 'Error en el servidor' };
        }
    }
    async actualiza(id, body) {
        const publicacion = await this.publicacionService.actualizar(id, body);
        if (!publicacion)
            throw new common_1.NotFoundException('Publicacion no encontrada');
    }
    async eliminar(id) {
        const publicacion = await this.publicacionService.eliminar(id);
        if (!publicacion)
            throw new common_1.NotFoundException('Publicacion no encontrada');
    }
};
exports.PublicacionController = PublicacionController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PublicacionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PublicacionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [publicacion_dto_1.CrearPublicacionDto]),
    __metadata("design:returntype", Promise)
], PublicacionController.prototype, "Crear", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ActualizarPublicacion_dto_1.ActualizarPublicacionDto]),
    __metadata("design:returntype", Promise)
], PublicacionController.prototype, "actualiza", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PublicacionController.prototype, "eliminar", null);
exports.PublicacionController = PublicacionController = __decorate([
    (0, common_1.Controller)('publicacion'),
    __metadata("design:paramtypes", [publicacion_service_1.PublicacionService])
], PublicacionController);
//# sourceMappingURL=publicacion.controller.js.map