import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "brutalist",
  component: ProductCrudComponent
},
{
  path: "brutalist/create",
  component: ProductCreateComponent
},
{
  path: "brutalist/update/:id",
  component: ProductUpdateComponent
},
{
  path: "brutalist/delete/:id",
  component: ProductDeleteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
