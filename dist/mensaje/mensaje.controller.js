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
exports.MensajeController = void 0;
const common_1 = require("@nestjs/common");
const mensaje_service_1 = require("./mensaje.service");
const mensaje_dto_1 = require("./dto/mensaje.dto");
const ActualizarMenaje_dto_1 = require("./dto/ActualizarMenaje.dto");
const platform_express_1 = require("@nestjs/platform-express");
const multer = require("multer");
let MensajeController = class MensajeController {
    constructor(mensajeService) {
        this.mensajeService = mensajeService;
    }
    findAll() {
        return this.mensajeService.findAll();
    }
    findOne(id) {
        return this.mensajeService.findOne(id);
    }
    async crear(body, file) {
        console.log(file);
        console.log(body);
        if (!file) {
            throw new Error('Archivo no encontrado');
        }
        const archivoBase64 = file.buffer.toString('base64');
        const nuevoMensaje = {
            ...body,
            archivo: archivoBase64,
        };
        return await this.mensajeService.crear(nuevoMensaje);
    }
    async actualiza(id, body) {
        const mensaje = await this.mensajeService.actualizar(id, body);
        if (!mensaje)
            throw new common_1.NotFoundException('Mensaje no encontrado');
    }
    async eliminar(id) {
        const mensaje = await this.mensajeService.eliminar(id);
        if (!id)
            throw new common_1.NotFoundException('Mensaje no encontrado');
    }
    async findOneByConversationId(conversationId) {
        const mensajes = await this.mensajeService.findOneByConversationId(conversationId);
        if (!mensajes || mensajes.length === 0)
            throw new common_1.NotFoundException('No se encontraron mensajes para esta conversación');
        return mensajes;
    }
};
exports.MensajeController = MensajeController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MensajeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MensajeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: multer.memoryStorage(),
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mensaje_dto_1.CrearMensajeDto, Object]),
    __metadata("design:returntype", Promise)
], MensajeController.prototype, "crear", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ActualizarMenaje_dto_1.ActualizarMensajeDto]),
    __metadata("design:returntype", Promise)
], MensajeController.prototype, "actualiza", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MensajeController.prototype, "eliminar", null);
__decorate([
    (0, common_1.Get)('conversation/:conversationId'),
    __param(0, (0, common_1.Param)('conversationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MensajeController.prototype, "findOneByConversationId", null);
exports.MensajeController = MensajeController = __decorate([
    (0, common_1.Controller)('mensaje'),
    __metadata("design:paramtypes", [mensaje_service_1.MensajeService])
], MensajeController);
//# sourceMappingURL=mensaje.controller.js.map