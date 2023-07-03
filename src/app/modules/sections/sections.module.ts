import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionsRoutingModule } from './sections-routing.module';
import { SecctionsPageComponent } from './page/secctions-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    SecctionsPageComponent,
  ],
  imports: [
    CommonModule,
    SectionsRoutingModule,
    SharedModule
  ]
})
export class SectionsModule { }
