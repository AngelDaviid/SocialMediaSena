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
exports.NotificacionSchema = exports.Notificacion = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Notificacion = class Notificacion {
};
exports.Notificacion = Notificacion;
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Schema.Types.ObjectId,
        required: true,
    }),
    __metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], Notificacion.prototype, "iduser", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Schema.Types.ObjectId,
    }),
    __metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], Notificacion.prototype, "idreaccion", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Schema.Types.ObjectId,
    }),
    __metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], Notificacion.prototype, "idpublicacion", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Schema.Types.ObjectId,
    }),
    __metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], Notificacion.prototype, "Idmensaje", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Schema.Types.ObjectId,
    }),
    __metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], Notificacion.prototype, "idevento", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Schema.Types.ObjectId,
    }),
    __metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], Notificacion.prototype, "idcomentario", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Schema.Types.ObjectId,
    }),
    __metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], Notificacion.prototype, "idempleo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Notificacion.prototype, "mensaje", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Notificacion.prototype, "tipo", void 0);
exports.Notificacion = Notificacion = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true
    })
], Notificacion);
exports.NotificacionSchema = mongoose_1.SchemaFactory.createForClass(Notificacion);
//# sourceMappingURL=notificacion.schema.js.map