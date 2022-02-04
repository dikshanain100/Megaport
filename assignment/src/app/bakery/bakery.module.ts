import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BakeryRoutingModule } from './bakery-routing.module';
import { BakeryComponent } from './bakery.component';

@NgModule({
  declarations: [BakeryComponent],
  imports: [
    CommonModule,
    BakeryRoutingModule
  ],
  exports :[BakeryComponent]
})
export class BakeryModule { }
