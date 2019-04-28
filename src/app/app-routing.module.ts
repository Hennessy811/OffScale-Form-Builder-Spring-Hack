import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConstructorComponent} from "./components/constructor/constructor.component";

const routes: Routes = [
  {
    path: '', redirectTo: 'constructor', pathMatch: 'full'
  },
  {
    path: 'constructor', component: ConstructorComponent
  },
  {
    path: '**', redirectTo: 'constructor'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
