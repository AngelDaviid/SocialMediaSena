"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamificacionModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const gamificacion_schema_1 = require("./schema/gamificacion.schema");
const gamificacion_controller_1 = require("./gamificacion.controller");
const gamificacion_service_1 = require("./gamificacion.service");
let GamificacionModule = class GamificacionModule {
};
exports.GamificacionModule = GamificacionModule;
exports.GamificacionModule = GamificacionModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Gamificacion', schema: gamificacion_schema_1.GamificacionSchema }])],
        controllers: [gamificacion_controller_1.GamificacionController],
        providers: [gamificacion_service_1.GamificacionService],
        exports: []
    })
], GamificacionModule);
//# sourceMappingURL=gamificacion.module.js.map