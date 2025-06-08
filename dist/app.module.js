"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const publicacion_module_1 = require("./publicacion/publicacion.module");
const comentario_module_1 = require("./comentario/comentario.module");
const reaccion_module_1 = require("./reaccion/reaccion.module");
const empleo_module_1 = require("./empleo/empleo.module");
const postulacion_module_1 = require("./postulacion/postulacion.module");
const evento_module_1 = require("./evento/evento.module");
const inscripcion_evento_module_1 = require("./inscripcion-evento/inscripcion-evento.module");
const certificado_module_1 = require("./certificado/certificado.module");
const notificacion_module_1 = require("./notificacion/notificacion.module");
const gamificacion_module_1 = require("./gamificacion/gamificacion.module");
const mongoose_1 = require("@nestjs/mongoose");
const auth_module_1 = require("./auth/auth.module");
const mensaje_module_1 = require("./mensaje/mensaje.module");
const conversations_module_1 = require("./conversations/conversations.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forRoot('mongodb+srv://angelreds2025:Clave2025*@cluster0.tttut.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
            users_module_1.UsersModule,
            publicacion_module_1.PublicacionModule,
            comentario_module_1.ComentarioModule,
            reaccion_module_1.ReaccionModule,
            empleo_module_1.EmpleoModule,
            postulacion_module_1.PostulacionModule,
            evento_module_1.EventoModule,
            inscripcion_evento_module_1.InscripcionEventoModule,
            certificado_module_1.CertificadoModule,
            notificacion_module_1.NotificacionModule,
            gamificacion_module_1.GamificacionModule,
            mensaje_module_1.MensajeModule,
            auth_module_1.AuthModule,
            conversations_module_1.ConversationsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map