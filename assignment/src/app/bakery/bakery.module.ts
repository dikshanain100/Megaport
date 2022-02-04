import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BakeryRoutingModule } from './bakery-routing.module';
import { BakeryComponent } from './bakery.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BakeryComponent],
  imports: [
    CommonModule,
    BakeryRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports :[BakeryComponent]
})
export class BakeryModule { }
