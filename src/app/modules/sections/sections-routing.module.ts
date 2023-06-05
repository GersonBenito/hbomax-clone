import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecctionsPageComponent } from './page/secctions-page.component';

const routes: Routes = [
  {
    path: '',
    component: SecctionsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionsRoutingModule { }
