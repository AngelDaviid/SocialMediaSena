"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificadoModule = void 0;
const common_1 = require("@nestjs/common");
const certificado_service_1 = require("./certificado.service");
const certificado_controller_1 = require("./certificado.controller");
const mongoose_1 = require("@nestjs/mongoose");
const certificado_schema_1 = require("./schema/certificado.schema");
let CertificadoModule = class CertificadoModule {
};
exports.CertificadoModule = CertificadoModule;
exports.CertificadoModule = CertificadoModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Certificado', schema: certificado_schema_1.CertificadoSchema }])],
        providers: [certificado_service_1.CertificadoService],
        controllers: [certificado_controller_1.CertificadoController]
    })
], CertificadoModule);
//# sourceMappingURL=certificado.module.js.map