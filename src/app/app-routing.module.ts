import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopmenuComponent } from './Components/topmenu/topmenu.component';

const routes: Routes = [
  {path:"",component:TopmenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
