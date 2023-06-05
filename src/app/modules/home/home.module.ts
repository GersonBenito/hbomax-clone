import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '@shared/shared.module';
import { SecctionsComponent } from './components/secctions/secctions.component';


@NgModule({
  declarations: [
    HomePageComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    SecctionsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
