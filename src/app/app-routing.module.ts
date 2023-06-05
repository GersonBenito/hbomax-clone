import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@modules/home/pages/home-page.component';

const routes: Routes = [
  {
    path: 'profile',
    loadChildren: () => import('@modules/profile/profile.module').then( m => m.ProfileModule )
  },
  {
    path: '',
    loadChildren: () => import('@modules/home/home.module').then( m => m.HomeModule ),
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
