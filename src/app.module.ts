import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PublicacionModule } from './publicacion/publicacion.module';
import { ComentarioModule } from './comentario/comentario.module';
import { ReaccionModule } from './reaccion/reaccion.module';
import { EmpleoModule } from './empleo/empleo.module';
import { PostulacionModule } from './postulacion/postulacion.module';
import { EventoModule } from './evento/evento.module';
import { InscripcionEventoModule } from './inscripcion-evento/inscripcion-evento.module';
import { CertificadoModule } from './certificado/certificado.module';
import { NotificacionModule } from './notificacion/notificacion.module';
import { GamificacionModule } from './gamificacion/gamificacion.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { MensajeModule } from './mensaje/mensaje.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://angelreds2025:Clave2025*@cluster0.tttut.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
    UsersModule, 
    PublicacionModule, 
    ComentarioModule, 
    ReaccionModule, 
    EmpleoModule, 
    PostulacionModule, 
    EventoModule, 
    InscripcionEventoModule, 
    CertificadoModule, 
    NotificacionModule, 
    GamificacionModule, 
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
