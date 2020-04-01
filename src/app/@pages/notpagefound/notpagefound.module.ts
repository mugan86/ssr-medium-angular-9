import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotpagefoundRoutingModule } from './notpagefound-routing.module';
import { NotpagefoundComponent } from './notpagefound.component';


@NgModule({
  declarations: [NotpagefoundComponent],
  imports: [
    CommonModule,
    NotpagefoundRoutingModule
  ]
})
export class NotpagefoundModule { }
