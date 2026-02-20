// Core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { HomeComponent } from './components/home/home.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PetsComponent } from './components/pets/pets.component';
import { PetsFormComponent } from './components/pets/pets-form/pets-form.component';
import { PetsListComponent } from './components/pets/pets-list/pets-list.component';
import { AtendimentoComponent } from './components/atendimento/atendimento.component';
import { AgendamentoComponent } from './components/agendamento/agendamento.component';
import { AgendamentoFormComponent } from './components/agendamento/agendamento-form/agendamento-form.component';
import { AgendamentoListComponent } from './components/agendamento/agendamento-list/agendamento-list.component';
import { TutoresComponent } from './components/tutores/tutores.component';
import { TutoresFormComponent } from './components/tutores/tutores-form/tutores-form.component';
import { TutoresListComponent } from './components/tutores/tutores-list/tutores-list.component';
import { SearchComponent } from './components/search/search.component';

// Material
import { MaterialModule } from './shared/material.module';

// Forms
import { ReactiveFormsModule } from '@angular/forms';

// Mask
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    TutoresComponent,
    TutoresFormComponent,
    TutoresListComponent,
    PetsComponent,
    PetsFormComponent,
    PetsListComponent,
    AtendimentoComponent,
    AgendamentoComponent,
    AgendamentoFormComponent,
    AgendamentoListComponent,
    HomeComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
