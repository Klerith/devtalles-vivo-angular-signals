import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalsLayoutComponent } from './layouts/signals-layout/signals-layout.component';

import { Example1PageComponent } from './pages/example1-page/example1-page.component';
import { Example2PageComponent } from './pages/example2-page/example2-page.component';

const routes: Routes = [
  {
    path: '',
    component: SignalsLayoutComponent,
    children: [
      { path: 'example-1', component: Example1PageComponent },
      { path: 'example-2', component: Example2PageComponent },

      { path: '**', redirectTo: 'example-1' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignalsRoutingModule { }
