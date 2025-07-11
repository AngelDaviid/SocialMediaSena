"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionEventoModule = void 0;
const common_1 = require("@nestjs/common");
const inscripcionevento_schema_1 = require("./schema/inscripcionevento.schema");
const mongoose_1 = require("@nestjs/mongoose");
const inscripcion_evento_controller_1 = require("./inscripcion-evento.controller");
const inscripcion_evento_service_1 = require("./inscripcion-evento.service");
let InscripcionEventoModule = class InscripcionEventoModule {
};
exports.InscripcionEventoModule = InscripcionEventoModule;
exports.InscripcionEventoModule = InscripcionEventoModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'InscripcionEvento', schema: inscripcionevento_schema_1.InscripcionEventoSchema }])],
        controllers: [inscripcion_evento_controller_1.InscripcionEventoController],
        providers: [inscripcion_evento_service_1.InscripcionEventoService],
    })
], InscripcionEventoModule);
//# sourceMappingURL=inscripcion-evento.module.js.map