"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpleoModule = void 0;
const common_1 = require("@nestjs/common");
const empleo_service_1 = require("./empleo.service");
const empleo_controller_1 = require("./empleo.controller");
const mongoose_1 = require("@nestjs/mongoose");
const empleo_schema_1 = require("./schema/empleo.schema");
let EmpleoModule = class EmpleoModule {
};
exports.EmpleoModule = EmpleoModule;
exports.EmpleoModule = EmpleoModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Empleo', schema: empleo_schema_1.EmpleoSchema }])],
        providers: [empleo_service_1.EmpleoService],
        controllers: [empleo_controller_1.EmpleoController]
    })
], EmpleoModule);
//# sourceMappingURL=empleo.module.js.map