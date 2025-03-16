import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PublicacionModule } from './publicacion/publicacion.module';
import { ComentarioModule } from './comentario/comentario.module';
import { ReaccionModule } from './reaccion/reaccion.module';
import { ChatModule } from './mensaje/chat.module';
import { EmpleoModule } from './empleo/empleo.module';
import { PostulacionModule } from './postulacion/postulacion.module';
import { EventoModule } from './evento/evento.module';
import { InscripcionEventoModule } from './inscripcion-evento/inscripcion-evento.module';
import { CertificadoModule } from './certificado/certificado.module';
import { NotificacionModule } from './notificacion/notificacion.module';
import { GamificacionModule } from './gamificacion/gamificacion.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/user'),UsersModule, PublicacionModule, ComentarioModule, ReaccionModule, ChatModule, EmpleoModule, PostulacionModule, EventoModule, InscripcionEventoModule, CertificadoModule, NotificacionModule, GamificacionModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
