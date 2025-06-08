import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ConversationsService } from  './conversations.service'
import { CreateConvesationDto } from './dto/conversations.dto';
import { UpdateConversationDto } from './dto/update-conversations.dto';


@Controller('conversations')
export class ConversationsController {
    constructor(private readonly conversationsService: ConversationsService) {}

    @Post()
    crear(@Body() createConversationDto: CreateConvesationDto) {
        return this.conversationsService.create(createConversationDto)
    }

    @Get()
    findAll(){
        return this.conversationsService.findAll()
    }

    @Get('user/:userId')
    getConversationsByUserId(@Param('userId') userId: string){
        return this.conversationsService.findByUser(userId)
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        return this.conversationsService.findOne(id)
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body() updateConversation:UpdateConversationDto){
        return this.conversationsService.update(id, updateConversation)
    }

    @Delete(':id')
    remove(@Param('id') id:string){
        return this.conversationsService.delete(id)
    }

    @Post('one-to-one')
    async findOrCreateOneToOne(@Body() body: { userA: string, userB: string},){
        return this.conversationsService.findOrCreateConversation(body.userA, body.userB);
    }


    
}
