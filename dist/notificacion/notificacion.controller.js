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
exports.NotificacionController = void 0;
const common_1 = require("@nestjs/common");
const notificacion_service_1 = require("./notificacion.service");
const notificacion_dto_1 = require("./dto/notificacion.dto");
const actualizarNotificacion_dto_1 = require("./dto/actualizarNotificacion.dto");
let NotificacionController = class NotificacionController {
    constructor(notificacionService) {
        this.notificacionService = notificacionService;
    }
    findAll() {
        return this.notificacionService.findAll();
    }
    findOne(id) {
        return this.notificacionService.findOne(id);
    }
    async crear(crearNotificacionDto) {
        const notificacion = await this.notificacionService.crear(crearNotificacionDto);
        return notificacion;
    }
    async actualizar(id, body) {
        const notificacion = await this.notificacionService.actualizar(id, body);
        if (!notificacion)
            throw new common_1.NotFoundException('No se encontró la notificación');
        return notificacion;
    }
    async eliminar(id) {
        const notificacion = await this.notificacionService.eliminar(id);
        if (!notificacion)
            throw new common_1.NotFoundException('No se encontró la notificación');
        return notificacion;
    }
};
exports.NotificacionController = NotificacionController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NotificacionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NotificacionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [notificacion_dto_1.CrearNotificacionDto]),
    __metadata("design:returntype", Promise)
], NotificacionController.prototype, "crear", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, actualizarNotificacion_dto_1.ActualizarNotificacionDto]),
    __metadata("design:returntype", Promise)
], NotificacionController.prototype, "actualizar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificacionController.prototype, "eliminar", null);
exports.NotificacionController = NotificacionController = __decorate([
    (0, common_1.Controller)('notificacion'),
    __metadata("design:paramtypes", [notificacion_service_1.NotificacionService])
], NotificacionController);
//# sourceMappingURL=notificacion.controller.js.map