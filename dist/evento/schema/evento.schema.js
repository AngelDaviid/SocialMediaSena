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
exports.EventoSchema = exports.Evento = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Evento = class Evento {
};
exports.Evento = Evento;
__decorate([
    (0, mongoose_1.Prop)({
        Type: mongoose_2.default.Schema.Types.ObjectId,
        required: true
    }),
    __metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], Evento.prototype, "idUsuario", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true
    }),
    __metadata("design:type", String)
], Evento.prototype, "nombre", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        require: true
    }),
    __metadata("design:type", String)
], Evento.prototype, "descripion", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        require: true
    }),
    __metadata("design:type", String)
], Evento.prototype, "categoria", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], Evento.prototype, "fechaHora", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true
    }),
    __metadata("design:type", String)
], Evento.prototype, "lugar", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true
    }),
    __metadata("design:type", Number)
], Evento.prototype, "inscritos", void 0);
exports.Evento = Evento = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true
    })
], Evento);
exports.EventoSchema = mongoose_1.SchemaFactory.createForClass(Evento);
//# sourceMappingURL=evento.schema.js.map