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
exports.ReaccionDto = exports.TipoReaccion = void 0;
const class_validator_1 = require("class-validator");
var TipoReaccion;
(function (TipoReaccion) {
    TipoReaccion["ME_GUSTA"] = "Me gusta";
    TipoReaccion["INTERESANTE"] = "Interesante";
    TipoReaccion["UTIL"] = "Util";
})(TipoReaccion || (exports.TipoReaccion = TipoReaccion = {}));
class ReaccionDto {
}
exports.ReaccionDto = ReaccionDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ReaccionDto.prototype, "publicacionOComentarioId", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(TipoReaccion),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ReaccionDto.prototype, "tipoReaccion", void 0);
//# sourceMappingURL=reaccion.dto.js.map