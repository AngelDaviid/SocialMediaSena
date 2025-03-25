import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    validarUser(nombre: string, password: string): Promise<{
        _id: import("mongoose").Types.ObjectId;
        $locals: Record<string, unknown>;
        $op: "save" | "validate" | "remove" | null;
        $where: Record<string, unknown>;
        baseModelName?: string;
        collection: import("mongoose").Collection;
        db: import("mongoose").Connection;
        errors?: import("mongoose").Error.ValidationError;
        id?: any;
        isNew: boolean;
        schema: import("mongoose").Schema;
        nombre: string;
        Email: string;
        rol: string;
        fotoPerfil: string;
        biografia: string;
        habilidadesCursos: string[];
        experienciaLaboral: string[];
        __v: number;
    } | null>;
    login(user: any): Promise<{
        access_token: string;
    }>;
    hashPassword(password: string): Promise<string>;
}
