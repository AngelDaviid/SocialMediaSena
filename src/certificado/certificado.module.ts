import { Module } from '@nestjs/common';
import { CertificadoService } from './certificado.service';
import { CertificadoController } from './certificado.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CertificadoSchema } from './schema/certificado.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'Certificado', schema: CertificadoSchema}])],
  providers: [CertificadoService],
  controllers: [CertificadoController]
})
export class CertificadoModule {}
