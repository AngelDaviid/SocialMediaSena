"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MensajeModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mensaje_schema_1 = require("./schema/mensaje.schema");
const mensaje_controller_1 = require("./mensaje.controller");
const mensaje_service_1 = require("./mensaje.service");
const conversations_module_1 = require("../conversations/conversations.module");
const conversatios_schema_1 = require("../conversations/schema/conversatios.schema");
const chat_gateway_1 = require("./chat.gateway");
let MensajeModule = class MensajeModule {
};
exports.MensajeModule = MensajeModule;
exports.MensajeModule = MensajeModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Mensaje', schema: mensaje_schema_1.MensajeSchema },
                { name: conversatios_schema_1.Conversation.name, schema: conversatios_schema_1.ConversationSchema }
            ]), conversations_module_1.ConversationsModule],
        controllers: [mensaje_controller_1.MensajeController],
        providers: [mensaje_service_1.MensajeService, chat_gateway_1.ChatGateway]
    })
], MensajeModule);
//# sourceMappingURL=mensaje.module.js.map