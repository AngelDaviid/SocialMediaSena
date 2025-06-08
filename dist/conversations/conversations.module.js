"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationsModule = void 0;
const common_1 = require("@nestjs/common");
const conversations_service_1 = require("./conversations.service");
const conversations_controller_1 = require("./conversations.controller");
const mongoose_1 = require("@nestjs/mongoose");
const conversatios_schema_1 = require("./schema/conversatios.schema");
let ConversationsModule = class ConversationsModule {
};
exports.ConversationsModule = ConversationsModule;
exports.ConversationsModule = ConversationsModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([
                { name: conversatios_schema_1.Conversation.name, schema: conversatios_schema_1.ConversationSchema }
            ])],
        providers: [conversations_service_1.ConversationsService],
        controllers: [conversations_controller_1.ConversationsController]
    })
], ConversationsModule);
//# sourceMappingURL=conversations.module.js.map