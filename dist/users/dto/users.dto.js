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
exports.CrearUsuarioDto = exports.RolUsuario = void 0;
const class_validator_1 = require("class-validator");
var RolUsuario;
(function (RolUsuario) {
    RolUsuario["ESTUDIANTE"] = "Estudiante";
    RolUsuario["EGRESADO"] = "Egresado";
    RolUsuario["INSTRUCTOR"] = "Instructor";
    RolUsuario["EMPRESA"] = "Empresa";
})(RolUsuario || (exports.RolUsuario = RolUsuario = {}));
class CrearUsuarioDto {
}
exports.CrearUsuarioDto = CrearUsuarioDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CrearUsuarioDto.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CrearUsuarioDto.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CrearUsuarioDto.prototype, "Email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CrearUsuarioDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(RolUsuario),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CrearUsuarioDto.prototype, "rol", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CrearUsuarioDto.prototype, "fotoPerfil", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CrearUsuarioDto.prototype, "biografia", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CrearUsuarioDto.prototype, "habilidadesCursos", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CrearUsuarioDto.prototype, "experienciaLaboral", void 0);
//# sourceMappingURL=users.dto.js.map