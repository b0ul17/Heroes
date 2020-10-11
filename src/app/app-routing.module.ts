import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddHeroComponent } from './add-hero/add-hero.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'details/:id', component: HeroDetailComponent },
  { path: 'add-hero', component: AddHeroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
