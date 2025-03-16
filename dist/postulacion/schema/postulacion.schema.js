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
exports.PostulacionSchema = exports.Postulacion = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Postulacion = class Postulacion {
};
exports.Postulacion = Postulacion;
__decorate([
    (0, mongoose_1.Prop)({
        unique: true,
        required: true
    }),
    __metadata("design:type", String)
], Postulacion.prototype, "ofertaEmpleoId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true
    }),
    __metadata("design:type", String)
], Postulacion.prototype, "cvAdjunto", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true
    }),
    __metadata("design:type", String)
], Postulacion.prototype, "mensajePresentacion", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true
    }),
    __metadata("design:type", String)
], Postulacion.prototype, "estado", void 0);
exports.Postulacion = Postulacion = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
    })
], Postulacion);
exports.PostulacionSchema = mongoose_1.SchemaFactory.createForClass(Postulacion);
//# sourceMappingURL=postulacion.schema.js.map