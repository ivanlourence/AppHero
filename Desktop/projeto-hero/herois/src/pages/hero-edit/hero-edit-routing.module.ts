import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroEditPage } from './hero-edit.page';

const routes: Routes = [
  {
    path: '',
    component: HeroEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroEditPageRoutingModule {}
