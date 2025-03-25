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
exports.GamificacionController = void 0;
const common_1 = require("@nestjs/common");
const gamificacion_service_1 = require("./gamificacion.service");
const gamificacion_dto_1 = require("./dto/gamificacion.dto");
let GamificacionController = class GamificacionController {
    constructor(gamificacionService) {
        this.gamificacionService = gamificacionService;
    }
    findAll() {
        return this.gamificacionService.findAll();
    }
    findOne(id) {
        return this.gamificacionService.findOne(id);
    }
    async crear(body) {
        const gamificacion = await this.gamificacionService.crear(body);
        return gamificacion;
    }
    async actualizar(id, body) {
        const gamificacion = await this.gamificacionService.actualizar(id, body);
        if (!gamificacion)
            throw new common_1.NotFoundException('Gamificacion no encontrada');
    }
    async eliminar(id) {
        const gamificacion = await this.gamificacionService.eliminar(id);
        if (!id)
            throw new common_1.NotFoundException('Gamificacion no encontrada');
    }
};
exports.GamificacionController = GamificacionController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GamificacionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GamificacionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [gamificacion_dto_1.GamificacionDto]),
    __metadata("design:returntype", Promise)
], GamificacionController.prototype, "crear", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, gamificacion_dto_1.GamificacionDto]),
    __metadata("design:returntype", Promise)
], GamificacionController.prototype, "actualizar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GamificacionController.prototype, "eliminar", null);
exports.GamificacionController = GamificacionController = __decorate([
    (0, common_1.Controller)('gamificacion'),
    __metadata("design:paramtypes", [gamificacion_service_1.GamificacionService])
], GamificacionController);
//# sourceMappingURL=gamificacion.controller.js.map