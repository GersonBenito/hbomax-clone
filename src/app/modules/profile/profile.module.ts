import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
// import { ProfilesPageComponent } from './pages/profiles-page/profiles-page.component';
import { SharedModule } from '@shared/shared.module';
import { ProfileComponent } from './components/profile/profile.component';
import { DetailsComponent } from './components/details/details.component';
import { ProfilesPageComponent } from './pages/profiles-page.component';


@NgModule({
  declarations: [
    ProfilesPageComponent,
    ProfileComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ]
})
export class ProfileModule { }
