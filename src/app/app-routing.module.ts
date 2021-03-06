import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetaleComponent } from './detale/detale.component';
import { EdycjaComponent } from './edycja/edycja.component';
import { FormularzComponent } from './formularz/formularz.component';
import { ListaComponent } from './lista/lista.component';
import { UsunComponent } from './usun/usun.component';

const routes: Routes = [
  { path: 'lista', component: ListaComponent, children: [
    {path: 'detale/:id', component: DetaleComponent}
  ]},
  { path: 'dodaj', component: FormularzComponent},
  { path: 'edytuj/:id', component: EdycjaComponent},
  { path: 'usun/:id', component: UsunComponent},
  { path: '', redirectTo: '/lista', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
