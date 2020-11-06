import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComidaComponent } from './components/comida/comida.component';

const routes: Routes = [
  { path: 'agregarMenu', component: ComidaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }