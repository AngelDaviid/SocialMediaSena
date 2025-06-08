import { Model } from 'mongoose';
import { Conversation } from './schema/conversatios.schema';
import { CreateConvesationDto } from './dto/conversations.dto';
import { UpdateConversationDto } from './dto/update-conversations.dto';
export declare class ConversationsService {
    private conversationModel;
    constructor(conversationModel: Model<Conversation>);
    create(dto: CreateConvesationDto): Promise<Conversation>;
    findAll(): Promise<Conversation[]>;
    findOne(id: string): Promise<Conversation>;
    update(id: string, dto: UpdateConversationDto): Promise<Conversation>;
    delete(id: string): Promise<Conversation>;
    findOrCreateConversation(userA: string, userB: string): Promise<Conversation>;
    findByUser(userId: string): Promise<Conversation[]>;
}
