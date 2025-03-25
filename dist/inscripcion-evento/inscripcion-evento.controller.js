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
exports.InscripcionEventoController = void 0;
const common_1 = require("@nestjs/common");
const inscripcion_evento_service_1 = require("./inscripcion-evento.service");
const incripcionEvento_dto_1 = require("./dto/incripcionEvento.dto");
let InscripcionEventoController = class InscripcionEventoController {
    constructor(inscripcioneventoService) {
        this.inscripcioneventoService = inscripcioneventoService;
    }
    findAll() {
        return this.inscripcioneventoService.findAll();
    }
    findOne(id) {
        return this.inscripcioneventoService.findOne(id);
    }
    async crear(body) {
        return await this.inscripcioneventoService.crear(body);
    }
    async actualizar(id, body) {
        const inscripcionEvento = await this.inscripcioneventoService.actualizar(id, body);
        if (!inscripcionEvento)
            throw new common_1.NotFoundException('Inscripcion no encontrrada');
    }
    async eliminar(id) {
        const inscripcionEvento = await this.inscripcioneventoService.eliminar(id);
        if (!id)
            throw new common_1.NotFoundException('Inscripcion no encontrada');
    }
};
exports.InscripcionEventoController = InscripcionEventoController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InscripcionEventoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InscripcionEventoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [incripcionEvento_dto_1.InscripcionEventoDto]),
    __metadata("design:returntype", Promise)
], InscripcionEventoController.prototype, "crear", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, incripcionEvento_dto_1.InscripcionEventoDto]),
    __metadata("design:returntype", Promise)
], InscripcionEventoController.prototype, "actualizar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InscripcionEventoController.prototype, "eliminar", null);
exports.InscripcionEventoController = InscripcionEventoController = __decorate([
    (0, common_1.Controller)('inscripcion-evento'),
    __metadata("design:paramtypes", [inscripcion_evento_service_1.InscripcionEventoService])
], InscripcionEventoController);
//# sourceMappingURL=inscripcion-evento.controller.js.map