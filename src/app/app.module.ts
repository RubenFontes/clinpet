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
import { AtendimentoComponent } from './components/atendimento/atendimento.component';
import { AgendamentoComponent } from './components/agendamento/agendamento.component';
import { TutoresComponent } from './components/tutores/tutores.component';
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
    PetsComponent,
    AtendimentoComponent,
    AgendamentoComponent,
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
