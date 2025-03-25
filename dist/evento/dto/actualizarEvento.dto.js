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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActualizarEventoDto = exports.CategoriaEvento = void 0;
const class_validator_1 = require("class-validator");
var CategoriaEvento;
(function (CategoriaEvento) {
    CategoriaEvento["CHARLA"] = "charla";
    CategoriaEvento["HACKATON"] = "hackat\u00F3n";
    CategoriaEvento["TALLER"] = "taller";
    CategoriaEvento["OTROS"] = "otros";
})(CategoriaEvento || (exports.CategoriaEvento = CategoriaEvento = {}));
class ActualizarEventoDto {
}
exports.ActualizarEventoDto = ActualizarEventoDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ActualizarEventoDto.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ActualizarEventoDto.prototype, "descripcion", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(CategoriaEvento),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ActualizarEventoDto.prototype, "categoria", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ActualizarEventoDto.prototype, "fechaHora", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ActualizarEventoDto.prototype, "lugar", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], ActualizarEventoDto.prototype, "inscritos", void 0);
//# sourceMappingURL=actualizarEvento.dto.js.map