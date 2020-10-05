import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: 'products', component: ProductListComponent},
  {path: 'products/:id', component: ProductDetailsComponent},
  {path: 'add', component: ProductAddComponent},
  {path: 'home', component: HomepageComponent},



  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
