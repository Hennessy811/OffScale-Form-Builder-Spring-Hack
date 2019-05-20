import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BuilderComponent} from './components/builder/builder.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'builder', pathMatch: 'full'
  },
  {
    path: 'builder', component: BuilderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
