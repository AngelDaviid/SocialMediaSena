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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MensajeService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const conversatios_schema_1 = require("../conversations/schema/conversatios.schema");
let MensajeService = class MensajeService {
    constructor(mensajeModel, conversationModel) {
        this.mensajeModel = mensajeModel;
        this.conversationModel = conversationModel;
    }
    async findAll() {
        return await this.mensajeModel.find().exec();
    }
    async findOne(id) {
        return await this.mensajeModel.findById(id).exec();
    }
    async findOneByConversationId(conversationId) {
        return this.mensajeModel.find({ conversationId }).sort({ createdAt: -1 }).exec();
    }
    async crear(MensajeDto) {
        const nuevoMensaje = new this.mensajeModel(MensajeDto);
        const mensajeGuardado = await nuevoMensaje.save();
        await this.conversationModel.findByIdAndUpdate(MensajeDto.conversationId, {
            lastMessage: mensajeGuardado._id,
            lastUpdatedBy: MensajeDto.idUser,
            updatedAt: new Date()
        });
        return mensajeGuardado;
    }
    async actualizar(id, mensajeDto) {
        return await this.mensajeModel.findByIdAndUpdate(id, mensajeDto, { new: true });
    }
    async eliminar(id) {
        return await this.mensajeModel.findByIdAndDelete(id);
    }
    async marcarComoLeido(messageId, idUser) {
        return this.mensajeModel.findByIdAndUpdate(messageId, {
            isRead: true, readAt: new Date(),
        });
    }
    async getMensajesPorConversacion(conversationId, limit = 20, skip = 0) {
        return this.mensajeModel.find({ conversationId })
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .exec();
    }
};
exports.MensajeService = MensajeService;
exports.MensajeService = MensajeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Mensaje')),
    __param(1, (0, mongoose_2.InjectModel)(conversatios_schema_1.Conversation.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], MensajeService);
//# sourceMappingURL=mensaje.service.js.map