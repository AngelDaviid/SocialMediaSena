import { Module } from '@nestjs/common';
import { ReaccionService } from './reaccion.service';
import { ReaccionController } from './reaccion.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ReaccionSchema } from './schema/reaccion.schema';

@Module({
    imports:[MongooseModule.forFeature([{ name:'Reaccion', schema: ReaccionSchema }])],
    providers: [ReaccionService],
    controllers: [ReaccionController]
})
export class ReaccionModule {}
