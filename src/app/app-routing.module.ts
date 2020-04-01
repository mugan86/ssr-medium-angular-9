import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./@pages/home/home.module').then(
        m => m.HomeModule
      )
  },
  {
    path: 'heroes',
    loadChildren: () =>
      import('./@pages/heroes/heroes.module').then(
        m => m.HeroesModule
      )
  },
  {
    path: 'not-page-found',
    loadChildren: () =>
      import('./@pages/notpagefound/notpagefound.module').then(
        m => m.NotpagefoundModule
      )
  },
  {
    path: '**',
    redirectTo: 'not-page-found',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      useHash: true,
      scrollPositionRestoration: 'enabled'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
