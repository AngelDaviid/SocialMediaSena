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
exports.EventoController = void 0;
const common_1 = require("@nestjs/common");
const evento_service_1 = require("./evento.service");
const evento_dto_1 = require("./dto/evento.dto");
const actualizarEvento_dto_1 = require("./dto/actualizarEvento.dto");
let EventoController = class EventoController {
    constructor(eventoService) {
        this.eventoService = eventoService;
    }
    findAll() {
        return this.eventoService.findAll();
    }
    findOne(id) {
        const evento = this.eventoService.findOne(id);
        if (!evento)
            throw new common_1.NotFoundException('Evento no encontrado');
        return evento;
    }
    async crear(body) {
        const evento = await this.eventoService.crear(body);
        return evento;
    }
    async actualizar(id, actualizarEventoDto) {
        const evento = await this.eventoService.actualizar(id, actualizarEventoDto);
        if (!evento)
            throw new common_1.NotFoundException('Evento no encontrado');
        return evento;
    }
    async eliminar(id) {
        const evento = await this.eventoService.eliminar(id);
        if (!evento)
            throw new common_1.NotFoundException('Evento no encontrado');
        return evento;
    }
};
exports.EventoController = EventoController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EventoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EventoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [evento_dto_1.CrearEventoDto]),
    __metadata("design:returntype", Promise)
], EventoController.prototype, "crear", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, actualizarEvento_dto_1.ActualizarEventoDto]),
    __metadata("design:returntype", Promise)
], EventoController.prototype, "actualizar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EventoController.prototype, "eliminar", null);
exports.EventoController = EventoController = __decorate([
    (0, common_1.Controller)('evento'),
    __metadata("design:paramtypes", [evento_service_1.EventoService])
], EventoController);
//# sourceMappingURL=evento.controller.js.map