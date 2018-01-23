import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';
import { ProductViewComponent } from './product-view/product-view.component';

import {ProductsComponent} from './products/products.component';



const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'product/:id', component: ProductViewComponent},
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
