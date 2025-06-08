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
exports.ConversationsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const conversatios_schema_1 = require("./schema/conversatios.schema");
let ConversationsService = class ConversationsService {
    constructor(conversationModel) {
        this.conversationModel = conversationModel;
    }
    async create(dto) {
        return this.conversationModel.create(dto);
    }
    async findAll() {
        return this.conversationModel.find().populate('participants').exec();
    }
    async findOne(id) {
        const conversation = await this.conversationModel.findById(id).populate('participants').exec();
        if (!conversation)
            throw new common_1.NotFoundException('Conversacion no encontrada');
        return conversation;
    }
    async update(id, dto) {
        const updated = await this.conversationModel.findByIdAndUpdate(id, dto, { new: true }).exec();
        if (!updated)
            throw new common_1.NotFoundException('Conversación no encontrada');
        return updated;
    }
    async delete(id) {
        const deleted = await this.conversationModel.findByIdAndDelete(id).exec();
        if (!deleted)
            throw new common_1.NotFoundException('Conversación no encontrada');
        return deleted;
    }
    async findOrCreateConversation(userA, userB) {
        const existing = await this.conversationModel.findOne({
            isGroup: false,
            participants: { $all: [userA, userB], $size: 2 }
        });
        if (existing)
            return existing;
        return this.create({
            participants: [userA, userB],
            isGroup: false
        });
    }
    async findByUser(userId) {
        return this.conversationModel.find({ participants: userId })
            .populate('participants')
            .populate('lastMessage')
            .sort({ updatedAt: -1 })
            .exec();
    }
};
exports.ConversationsService = ConversationsService;
exports.ConversationsService = ConversationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(conversatios_schema_1.Conversation.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ConversationsService);
//# sourceMappingURL=conversations.service.js.map