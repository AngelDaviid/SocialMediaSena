import { Module } from '@nestjs/common';
import { EmpleoService } from './empleo.service';
import { EmpleoController } from './empleo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EmpleoSchema } from './schema/empleo.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name:'Empleo', schema: EmpleoSchema }])],
    providers: [EmpleoService],
    controllers: [EmpleoController]
})
export class EmpleoModule {}
