import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SantiagoComponent } from './santiago/santiago.component';

const routes: Routes = [
  {path: "RutaSanti", component: SantiagoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
