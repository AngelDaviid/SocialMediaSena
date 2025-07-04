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
exports.ComentarioController = void 0;
const common_1 = require("@nestjs/common");
const comentario_service_1 = require("./comentario.service");
const comentario_dto_1 = require("./dto/comentario.dto");
const platform_express_1 = require("@nestjs/platform-express");
const multer = require("multer");
let ComentarioController = class ComentarioController {
    constructor(comentarioService) {
        this.comentarioService = comentarioService;
    }
    findAll() {
        return this.comentarioService.findAll();
    }
    findOne(id) {
        return this.comentarioService.findOne(id);
    }
    async crear(comentarioDto, file) {
        console.log(file);
        console.log(comentarioDto);
        if (!file) {
            throw new Error('El archivo no se encuentra');
        }
        const archivoBase64 = file.buffer.toString('base64');
        const nuevoComentario = {
            ...comentarioDto,
            archivo: archivoBase64,
        };
        return await this.comentarioService.crear(nuevoComentario);
    }
    async actualizar(id, comentarioActualizar) {
        return this.comentarioService.actualizar(id, comentarioActualizar);
    }
    async eliminar(id) {
        return this.comentarioService.eliminar(id);
    }
};
exports.ComentarioController = ComentarioController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ComentarioController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ComentarioController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: multer.memoryStorage(),
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comentario_dto_1.ComentarioDto, Object]),
    __metadata("design:returntype", Promise)
], ComentarioController.prototype, "crear", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, comentario_dto_1.ComentarioDto]),
    __metadata("design:returntype", Promise)
], ComentarioController.prototype, "actualizar", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ComentarioController.prototype, "eliminar", null);
exports.ComentarioController = ComentarioController = __decorate([
    (0, common_1.Controller)('comentario'),
    __metadata("design:paramtypes", [comentario_service_1.ComentarioService])
], ComentarioController);
//# sourceMappingURL=comentario.controller.js.map