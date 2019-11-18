import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  ViewDriverComponent} from './view-driver/view-driver.component';
import { NewDriverComponent } from './new-driver/new-driver.component';


const routes: Routes = [

{
  path: 'new-driver',
  component: NewDriverComponent
},
{
  path: 'view-driver',
  component: ViewDriverComponent
}/*,

{
  path: 'edit/:id',
  component:EditComponent
}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
