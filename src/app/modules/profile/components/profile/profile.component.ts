import { Component, inject } from '@angular/core';
import { User } from '@core/models/user.interface';
import * as userJson from '@core/data/users.json'; 
import { ProfileService } from '@modules/profile/services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  public profiles: User[] = [];

  // inject angular v14
  private _profileService = inject(ProfileService);
  private _router = inject(Router);

  ngOnInit(): void {
      this.getUsersFromJson();
  }

  getUsersFromJson(): void{
    const { users }: any = ( userJson as any );
    this.profiles = users;
  }

  selectProfile(profile: User){
    this._profileService.setProfile(profile);
    this._router.navigate(['/']);
  }
}
