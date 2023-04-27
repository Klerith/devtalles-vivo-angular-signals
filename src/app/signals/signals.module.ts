import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { SignalsRoutingModule } from './signals-routing.module';
import { SignalsLayoutComponent } from './layouts/signals-layout/signals-layout.component';
import { Example1PageComponent } from './pages/example1-page/example1-page.component';




@NgModule({
  declarations: [
    SignalsLayoutComponent,
    Example1PageComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    SignalsRoutingModule,
  ]
})
export class SignalsModule { }
