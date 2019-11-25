import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  ViewDriverComponent} from './view-driver/view-driver.component';
import { NewDriverComponent } from './new-driver/new-driver.component';
import { EditDriverComponent } from "./edit-driver/edit-driver.component";
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [

{
  path: 'new-driver',
  component: NewDriverComponent
},
{
  path: 'view-driver',
  component: ViewDriverComponent
},
{
  path: 'home',
  component: HomePageComponent
},
{
  path: 'edit-driver/:id',
  component:EditDriverComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
