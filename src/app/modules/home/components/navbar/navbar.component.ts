import { Component, Output, EventEmitter, inject, OnInit, Input } from '@angular/core';
import { User } from '@core/models/user.interface';
import { ProfileService } from '@modules/profile/services/profile.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  private _profileService = inject(ProfileService);
  @Output() onShowSideBar: EventEmitter<boolean> = new EventEmitter(); 
  @Input() background: string = '';
  @Input() color: string = '';

  public profile: User = {
    id: 0,
    username: '',
    email: ''
  }

  ngOnInit(): void {
    this.getUserPrfile();
  }

  showSideBar(): void {
    this.onShowSideBar.emit(true);
  }

  getUserPrfile(): void {
    this.profile = this._profileService.getProfile();
  }

}
