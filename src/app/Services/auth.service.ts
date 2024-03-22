import {Injectable} from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private jwtHelper: JwtHelperService) {
    }

    public isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        // kiểm tra xem token hết hạn chưa hết hạn trả về false chưa hết hạn trả về true
        return !this.jwtHelper.isTokenExpired(token);
    }
}
