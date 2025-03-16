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
exports.GamificacionDto = exports.TipoLogro = void 0;
const class_validator_1 = require("class-validator");
var TipoLogro;
(function (TipoLogro) {
    TipoLogro["PARTICIPACION"] = "participaci\u00F3n";
    TipoLogro["CONTRIBUCION"] = "contribuci\u00F3n";
    TipoLogro["LOGRO_DESTACADO"] = "logro destacado";
    TipoLogro["OTROS"] = "otros";
})(TipoLogro || (exports.TipoLogro = TipoLogro = {}));
class GamificacionDto {
}
exports.GamificacionDto = GamificacionDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], GamificacionDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(TipoLogro),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], GamificacionDto.prototype, "tipoLogro", void 0);
//# sourceMappingURL=gamificacion.dto.js.map