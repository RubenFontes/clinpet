import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgendamentoComponent } from './components/agendamento/agendamento.component';
import { AtendimentoComponent } from './components/atendimento/atendimento.component';
import { HomeComponent } from './components/home/home.component';
import { PetsComponent } from './components/pets/pets.component';
import { TutoresComponent } from './components/tutores/tutores.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'atendimento', component: AtendimentoComponent},
  {path: 'agendamento', component: AgendamentoComponent},
  {path: 'pets', component: PetsComponent},
  {path: 'tutores', component: TutoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
