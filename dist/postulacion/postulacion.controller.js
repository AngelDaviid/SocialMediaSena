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
exports.PostulacionController = void 0;
const common_1 = require("@nestjs/common");
const postulacion_service_1 = require("./postulacion.service");
const postulacion_dto_1 = require("./dto/postulacion.dto");
const actualizarPostulacion_dto_1 = require("./dto/actualizarPostulacion.dto");
let PostulacionController = class PostulacionController {
    constructor(postulacionService) {
        this.postulacionService = postulacionService;
    }
    findAll() {
        return this.postulacionService.findAll();
    }
    findOne(id) {
        const postulacion = this.postulacionService.findOne(id);
        if (!postulacion)
            throw new common_1.NotFoundException('Postulacion no encontrada');
        return postulacion;
    }
    async crear(body) {
        const postulacion = await this.postulacionService.crear(body);
        return postulacion;
    }
    async actualizar(id, body) {
        const postulacion = await this.postulacionService.actualizar(id, body);
        if (!postulacion)
            throw new common_1.NotFoundException('Postulacion no encontrada');
        return postulacion;
    }
    async eliminar(id) {
        const postulacion = await this.postulacionService.eliminar(id);
        if (!postulacion)
            throw new common_1.NotFoundException('Postulacion no encontrada');
        return postulacion;
    }
};
exports.PostulacionController = PostulacionController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PostulacionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostulacionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [postulacion_dto_1.CrearPostulacionDto]),
    __metadata("design:returntype", Promise)
], PostulacionController.prototype, "crear", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, actualizarPostulacion_dto_1.ActualizarPostulacionDto]),
    __metadata("design:returntype", Promise)
], PostulacionController.prototype, "actualizar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostulacionController.prototype, "eliminar", null);
exports.PostulacionController = PostulacionController = __decorate([
    (0, common_1.Controller)('postulacion'),
    __metadata("design:paramtypes", [postulacion_service_1.PostulacionService])
], PostulacionController);
//# sourceMappingURL=postulacion.controller.js.map