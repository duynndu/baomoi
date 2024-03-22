import {CanActivateFn, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "../Services/auth.service";
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = () => {
    const authService: AuthService = inject(AuthService);
    const router: Router = inject(Router);
    if (!authService.isAuthenticated()) {
        router.navigate(['/admin','login']).then(r => console.log(r));
        return false
    }
    return true;
};
