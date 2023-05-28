import { Component } from '@angular/core';
import { User } from '@core/models/user.interface';
import * as userJson from '@core/data/users.json'; 

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  public users: User[] = [];

  ngOnInit(): void {
      this.getUsersFromJson();
  }

  getUsersFromJson(): void{
    const { users }: any = ( userJson as any );
    this.users = users;
  }
}
