"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReaccionModule = void 0;
const common_1 = require("@nestjs/common");
const reaccion_service_1 = require("./reaccion.service");
const reaccion_controller_1 = require("./reaccion.controller");
const mongoose_1 = require("@nestjs/mongoose");
const reaccion_schema_1 = require("./schema/reaccion.schema");
let ReaccionModule = class ReaccionModule {
};
exports.ReaccionModule = ReaccionModule;
exports.ReaccionModule = ReaccionModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Reaccion', schema: reaccion_schema_1.ReaccionSchema }])],
        providers: [reaccion_service_1.ReaccionService],
        controllers: [reaccion_controller_1.ReaccionController]
    })
], ReaccionModule);
//# sourceMappingURL=reaccion.module.js.map