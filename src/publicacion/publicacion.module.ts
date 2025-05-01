import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PublicacionSchema } from './schema/publicacion.schema';
import { PublicacionController } from './publicacion.controller';
import { PublicacionService } from './publicacion.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Publicacion', schema: PublicacionSchema }]),
    ],
    controllers: [PublicacionController],
    providers: [PublicacionService],
    exports: []
})
export class PublicacionModule {
    
}
