import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionsRoutingModule } from './sections-routing.module';
import { SecctionsPageComponent } from './page/secctions-page.component';
import { SharedModule } from '@shared/shared.module';
import { SectionComponent } from './components/section/section.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    SecctionsPageComponent,
    SectionComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    SectionsRoutingModule,
    SharedModule
  ]
})
export class SectionsModule { }
