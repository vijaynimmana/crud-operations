import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditproductsComponent } from './editproducts/editproducts.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { ListproductsComponent } from './listproducts/listproducts.component';
const routes: Routes = [
  {path:'', component:ListproductsComponent},
  {path:'addproducts', component:AddproductsComponent},
  {path:'editproducts/:id', component:EditproductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [
  AddproductsComponent ,
  EditproductsComponent,
  ListproductsComponent
]