import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(body: {
        nombre: string;
        password: string;
    }): Promise<{
        access_token: string;
    }>;
}
