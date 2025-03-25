import { Module } from '@nestjs/common';
import { PostulacionController } from './postulacion.controller';
import { PostulacionService } from './postulacion.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PostulacionSchema } from './schema/postulacion.schema';

@Module({
  imports:[MongooseModule.forFeature([{name: 'Postulacion', schema: PostulacionSchema}])],
  controllers: [PostulacionController],
  providers: [PostulacionService]
})
export class PostulacionModule {}
