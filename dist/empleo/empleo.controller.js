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
exports.EmpleoController = void 0;
const common_1 = require("@nestjs/common");
const empleo_service_1 = require("./empleo.service");
const empleo_dto_1 = require("./dto/empleo.dto");
const actualizarEmpleo_dto_1 = require("./dto/actualizarEmpleo.dto");
let EmpleoController = class EmpleoController {
    constructor(empleoService) {
        this.empleoService = empleoService;
    }
    findAll() {
        return this.empleoService.findAll();
    }
    async findOne(id) {
        const empleo = this.empleoService.findOne(id);
        if (!empleo)
            throw new common_1.NotFoundException('Empleo no encontrado');
        return empleo;
    }
    async crear(body) {
        const empleo = this.empleoService.crear(body);
        return empleo;
    }
    async actualizar(id, actualizarEmpleo) {
        const empleo = await this.empleoService.actualizar(id, actualizarEmpleo);
        if (!empleo)
            throw new common_1.NotFoundException('Empleo no encotrado');
        return empleo;
    }
    async eliminar(id) {
        const empleo = this.empleoService.eliminar(id);
        if (!empleo)
            throw new common_1.NotFoundException('Empleo no encontrado');
        return empleo;
    }
};
exports.EmpleoController = EmpleoController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EmpleoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EmpleoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [empleo_dto_1.CrearEmpleoDto]),
    __metadata("design:returntype", Promise)
], EmpleoController.prototype, "crear", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, actualizarEmpleo_dto_1.ActualizarEmpleoDto]),
    __metadata("design:returntype", Promise)
], EmpleoController.prototype, "actualizar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EmpleoController.prototype, "eliminar", null);
exports.EmpleoController = EmpleoController = __decorate([
    (0, common_1.Controller)('empleo'),
    __metadata("design:paramtypes", [empleo_service_1.EmpleoService])
], EmpleoController);
//# sourceMappingURL=empleo.controller.js.map