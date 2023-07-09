import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@core/models/user.interface';
import { ProfileService } from '@modules/profile/services/profile.service';
import { CookieService } from 'ngx-cookie-service';


export const authGuard = () => {

    const _cookieService = inject(CookieService);
    const router = inject(Router)
    
    const user: string | null = _cookieService.get('profile');

    if(user){
        return true;
    }else{
        // si el usuario no existe se redirecciona a la seleccion de perfil
        router.navigate(['profile','select']);
        return false;
    }

}