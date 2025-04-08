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
exports.EmpleoSchema = exports.Empleo = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Empleo = class Empleo {
};
exports.Empleo = Empleo;
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Schema.Types.ObjectId,
        required: true,
    }),
    __metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], Empleo.prototype, "iduser", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true
    }),
    __metadata("design:type", String)
], Empleo.prototype, "empresa", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        require: true
    }),
    __metadata("design:type", String)
], Empleo.prototype, "cargo", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true
    }),
    __metadata("design:type", String)
], Empleo.prototype, "descripcion", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true
    }),
    __metadata("design:type", String)
], Empleo.prototype, "requisitos", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true
    }),
    __metadata("design:type", String)
], Empleo.prototype, "ubicacion", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true
    }),
    __metadata("design:type", String)
], Empleo.prototype, "estado", void 0);
exports.Empleo = Empleo = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true
    })
], Empleo);
exports.EmpleoSchema = mongoose_1.SchemaFactory.createForClass(Empleo);
//# sourceMappingURL=empleo.schema.js.map