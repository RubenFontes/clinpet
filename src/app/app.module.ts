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
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule, MatFabAnchor } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';


// Forms
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    NgxMaskModule.forRoot(),
    MatOptionModule,
    MatSelectModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
