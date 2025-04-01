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
exports.ReaccionController = void 0;
const common_1 = require("@nestjs/common");
const reaccion_service_1 = require("./reaccion.service");
const reaccion_dto_1 = require("./dto/reaccion.dto");
let ReaccionController = class ReaccionController {
    constructor(reaccionService) {
        this.reaccionService = reaccionService;
    }
    findAll() {
        return this.reaccionService.findAll();
    }
    async findOne(id) {
        const reaccion = await this.reaccionService.findOne(id);
        if (!reaccion)
            throw new common_1.NotFoundException('Reaccion no encontrada');
        return reaccion;
    }
    async crear(crearReaccion) {
        const reaccion = await this.reaccionService.crear(crearReaccion);
        return reaccion;
    }
    async actualizar(id, body) {
        const reaccion = await this.reaccionService.actualizar(id, body);
        if (!reaccion)
            throw new common_1.NotFoundException('Reaccion no encontrada');
        return reaccion;
    }
    async eliminar(id) {
        const reaccion = this.reaccionService.eliminar(id);
        if (!reaccion)
            throw new common_1.NotFoundException('Reaccion no encontrada');
        return reaccion;
    }
    agregarReaccion(body) {
        return this.reaccionService.agregarReaccion(body.entidadId, body.tipoEntidad, body.tipoReaccion);
    }
};
exports.ReaccionController = ReaccionController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReaccionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReaccionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reaccion_dto_1.ReaccionDto]),
    __metadata("design:returntype", Promise)
], ReaccionController.prototype, "crear", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, reaccion_dto_1.ReaccionDto]),
    __metadata("design:returntype", Promise)
], ReaccionController.prototype, "actualizar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReaccionController.prototype, "eliminar", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReaccionController.prototype, "agregarReaccion", null);
exports.ReaccionController = ReaccionController = __decorate([
    (0, common_1.Controller)('reaccion'),
    __metadata("design:paramtypes", [reaccion_service_1.ReaccionService])
], ReaccionController);
//# sourceMappingURL=reaccion.controller.js.map