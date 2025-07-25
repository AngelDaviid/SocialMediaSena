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
exports.InscripcionEventoDto = exports.TipoInscripcion = exports.EstadoInscripcion = void 0;
const class_validator_1 = require("class-validator");
const evento_schema_1 = require("../../evento/schema/evento.schema");
var EstadoInscripcion;
(function (EstadoInscripcion) {
    EstadoInscripcion["PENDIENTE"] = "pendiente";
    EstadoInscripcion["CONFIRMADA"] = "confirmada";
    EstadoInscripcion["CANCELADA"] = "cancelada";
})(EstadoInscripcion || (exports.EstadoInscripcion = EstadoInscripcion = {}));
var TipoInscripcion;
(function (TipoInscripcion) {
    TipoInscripcion["CURSO_CORTO"] = "Curso Corto";
    TipoInscripcion["SEMILLERO"] = "Semillero";
    TipoInscripcion["SENNOVA"] = "SENNOVA";
    TipoInscripcion["TECNOLOGO"] = "Tecnologo";
})(TipoInscripcion || (exports.TipoInscripcion = TipoInscripcion = {}));
class InscripcionEventoDto {
}
exports.InscripcionEventoDto = InscripcionEventoDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], InscripcionEventoDto.prototype, "iduser", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", evento_schema_1.Evento)
], InscripcionEventoDto.prototype, "eventoId", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(EstadoInscripcion),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], InscripcionEventoDto.prototype, "estado", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(TipoInscripcion),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], InscripcionEventoDto.prototype, "tipoinscripcion", void 0);
//# sourceMappingURL=incripcionEvento.dto.js.map