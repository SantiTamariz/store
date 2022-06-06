import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SantiagoComponent } from './santiago/santiago.component';

const routes: Routes = [
  {path: "RutaSanti", component: SantiagoComponent},
  { path: 'products', loadChildren: () => import('./page/products/products.module').then(m => m.ProductsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
