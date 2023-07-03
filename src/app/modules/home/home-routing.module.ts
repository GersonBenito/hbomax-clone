import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@modules/sections/sections.module').then( m => m.SectionsModule )
  },
  {
    path: 'series',
    loadChildren: () => import('@modules/series/series.module').then( m => m.SeriesModule )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
