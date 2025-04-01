import { UsersService } from './users.service';
import { CrearUsuarioDto } from './dto/users.dto';
import { ActualizarUserDto } from './dto/ActualizarUser.dto';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./schema/user.schema").User> & import("./schema/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    findOneById(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schema/user.schema").User> & import("./schema/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    findOneUser(username: string): Promise<(import("mongoose").Document<unknown, {}, import("./schema/user.schema").User> & import("./schema/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    crear(body: CrearUsuarioDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/user.schema").User> & import("./schema/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    eliminar(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schema/user.schema").User> & import("./schema/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    actualizar(id: string, body: ActualizarUserDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/user.schema").User> & import("./schema/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
