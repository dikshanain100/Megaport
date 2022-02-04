import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bakery',
    pathMatch: 'full'
  },
  {
    path: 'bakery',
    loadChildren: () => import('./bakery/bakery.module').then(m => m.BakeryModule)
  },
  {
    path: 'address',
    loadChildren: () => import('./address/address.module').then(m => m.AddressModule)
  },
  {
    path: 'get',
    loadChildren: () => import('./get/get.module').then(m => m.GetModule)
  },
  { 
    path: '**', 
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
