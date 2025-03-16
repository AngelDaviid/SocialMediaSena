"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostulacionModule = void 0;
const common_1 = require("@nestjs/common");
const postulacion_controller_1 = require("./postulacion.controller");
const postulacion_service_1 = require("./postulacion.service");
const mongoose_1 = require("@nestjs/mongoose");
const postulacion_schema_1 = require("./schema/postulacion.schema");
let PostulacionModule = class PostulacionModule {
};
exports.PostulacionModule = PostulacionModule;
exports.PostulacionModule = PostulacionModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Postulacion', schema: postulacion_schema_1.PostulacionSchema }])],
        controllers: [postulacion_controller_1.PostulacionController],
        providers: [postulacion_service_1.PostulacionService]
    })
], PostulacionModule);
//# sourceMappingURL=postulacion.module.js.map