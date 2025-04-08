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
exports.CrearPublicacionDto = exports.CategoriaPublicacion = void 0;
const class_validator_1 = require("class-validator");
var CategoriaPublicacion;
(function (CategoriaPublicacion) {
    CategoriaPublicacion["PREGUNTAS"] = "preguntas";
    CategoriaPublicacion["RECURSOS"] = "recursos";
    CategoriaPublicacion["EXPERIENCIAS"] = "experiencias";
    CategoriaPublicacion["OTROS"] = "otros";
})(CategoriaPublicacion || (exports.CategoriaPublicacion = CategoriaPublicacion = {}));
class CrearPublicacionDto {
}
exports.CrearPublicacionDto = CrearPublicacionDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], CrearPublicacionDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CrearPublicacionDto.prototype, "contenido", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(CategoriaPublicacion),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CrearPublicacionDto.prototype, "categoria", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CrearPublicacionDto.prototype, "numeroReacciones", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CrearPublicacionDto.prototype, "numeroComentarios", void 0);
//# sourceMappingURL=publicacion.dto.js.map