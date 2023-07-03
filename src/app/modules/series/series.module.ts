import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesRoutingModule } from './series-routing.module';
import { SharedModule } from '@shared/shared.module';
import { SeriesPageComponent } from './pages/series-page.component';


@NgModule({
  declarations: [
    SeriesPageComponent
  ],
  imports: [
    CommonModule,
    SeriesRoutingModule,
    SharedModule
  ]
})
export class SeriesModule { }
