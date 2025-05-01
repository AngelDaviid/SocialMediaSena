import { Module } from '@nestjs/common';
import { ComentarioController } from './comentario.controller';
import { ComentarioService } from './comentario.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ComentarioSchema } from './schema/comentario.schema'
@Module({
  imports: [MongooseModule.forFeature([{name: 'comentario', schema: ComentarioSchema}])
  ],
  controllers: [ComentarioController],
  providers: [ComentarioService]
})
export class ComentarioModule {}
