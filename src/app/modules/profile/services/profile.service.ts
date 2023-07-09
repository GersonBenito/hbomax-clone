import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@core/models/user.interface';
import { CookieService } from 'ngx-cookie-service';
import { environment as env } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  // constructor() { }

  // angular v14 inject
  private _cookieService = inject(CookieService);
  private _router = inject(Router)

  setProfile(profile: User): void{
    this._cookieService.set('profile', JSON.stringify(profile), env.expiredSession, '/');
  }

  // getProfile(): User | null {
  //   const profile = this._cookieService.get('profile');
  //   if(profile){
  //     return JSON.parse(profile);
  //   }else{
  //     return null;
  //   }
  // }

}
