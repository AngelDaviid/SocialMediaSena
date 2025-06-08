import { ConversationsService } from './conversations.service';
import { CreateConvesationDto } from './dto/conversations.dto';
import { UpdateConversationDto } from './dto/update-conversations.dto';
export declare class ConversationsController {
    private readonly conversationsService;
    constructor(conversationsService: ConversationsService);
    crear(createConversationDto: CreateConvesationDto): Promise<import("./schema/conversatios.schema").Conversation>;
    findAll(): Promise<import("./schema/conversatios.schema").Conversation[]>;
    getConversationsByUserId(userId: string): Promise<import("./schema/conversatios.schema").Conversation[]>;
    findOne(id: string): Promise<import("./schema/conversatios.schema").Conversation>;
    update(id: string, updateConversation: UpdateConversationDto): Promise<import("./schema/conversatios.schema").Conversation>;
    remove(id: string): Promise<import("./schema/conversatios.schema").Conversation>;
    findOrCreateOneToOne(body: {
        userA: string;
        userB: string;
    }): Promise<import("./schema/conversatios.schema").Conversation>;
}
