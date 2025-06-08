import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Conversation } from './schema/conversatios.schema';
import { CreateConvesationDto } from './dto/conversations.dto';
import { UpdateConversationDto } from './dto/update-conversations.dto';

@Injectable()
export class ConversationsService {
    constructor(@InjectModel(Conversation.name) private conversationModel: Model<Conversation>){}

    async create(dto: CreateConvesationDto): Promise<Conversation>{
        return this.conversationModel.create(dto);
    }

    async findAll(): Promise<Conversation[]>{
        return this.conversationModel.find().populate('participants').exec();
    }

    async findOne(id: string): Promise<Conversation> {
        const conversation = await this.conversationModel.findById(id).populate('participants').exec();
        if (!conversation) throw new NotFoundException('Conversacion no encontrada');
        return conversation;
    }
    async update(id: string, dto: UpdateConversationDto): Promise<Conversation> {
        const updated = await this.conversationModel.findByIdAndUpdate(id, dto, { new: true }).exec();
        if (!updated) throw new NotFoundException('Conversación no encontrada');
        return updated;
    }

    async delete(id: string): Promise<Conversation> {
    const deleted = await this.conversationModel.findByIdAndDelete(id).exec();
    if (!deleted) throw new NotFoundException('Conversación no encontrada');
    return deleted;
}

    async findOrCreateConversation(userA:string , userB: string): Promise<Conversation>{
        const existing = await this.conversationModel.findOne({
            isGroup: false,
            participants: { $all: [userA, userB], $size: 2 }
        });

        if (existing) return existing;

        return this.create({
            participants: [userA, userB],
            isGroup: false
        })
    }

    async findByUser(userId: string): Promise<Conversation[]>{
        return this.conversationModel.find({ participants: userId })
            .populate('participants')
            .populate('lastMessage')
            .sort({ updatedAt: -1 })
            .exec();
    }


}
