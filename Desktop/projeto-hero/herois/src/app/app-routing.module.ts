import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'hero-create',
    loadChildren: () => import('../pages/hero-create/hero-create.module').then( m => m.HeroCreatePageModule)
  },
  {
    path: 'hero-edit',
    loadChildren: () => import('../pages/hero-edit/hero-edit.module').then( m => m.HeroEditPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
