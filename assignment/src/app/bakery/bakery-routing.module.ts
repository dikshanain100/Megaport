import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BakeryComponent } from './bakery.component';

const routes: Routes = [
  {
    path: '',
    component: BakeryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BakeryRoutingModule { }
