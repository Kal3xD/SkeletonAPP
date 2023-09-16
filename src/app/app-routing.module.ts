import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotfoundPage } from './errors/notfound/notfound.page';
import { FirstGuardGuard } from './first-guard.guard';



const routes: Routes = [
  {
    path: 'home',
    canActivate: [FirstGuardGuard],
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },/*
  {
    path: 'notfound',
    loadChildren: () => import('./errors/notfound/notfound.module').then( m => m.NotfoundPageModule)
  },*/
  
  {
    path:'**',
    component: NotfoundPage
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
