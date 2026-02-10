import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { OnInit } from '@angular/core';
import { TutorService } from '../../services/tutor.service';
import { ITutor } from 'src/app/models/Tutor';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-tutores',
  templateUrl: './tutores.component.html',
  styleUrls: ['./tutores.component.css']
})

export class TutoresComponent implements OnInit {

  ngOnInit(): void {
    this.listaTutores();
    this.buscaTutores('');
  }
  
  tutores: ITutor[] = [];
  tutoresFiltrados: ITutor[] = [];
  mostrarListagem = true;
  tutorEmEdicao: ITutor | null = null;
  query: string = '';

  constructor (private tutorService: TutorService, private snackBar: MatSnackBar){}

  formTutor: FormGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    telefone: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    endereco: new FormControl(''),
    cpf: new FormControl('', Validators.required)
  });

  // CRUD
  salvaTutor() {
    if (this.tutorEmEdicao) {
      const tutorAtualizado = { ...this.formTutor.value, id: this.tutorEmEdicao.id };
      this.tutorService.updateTutor(tutorAtualizado);
      this.snackBar.open('Tutor atualizado com sucesso!', 'Fechar')
      this.cancelarEdicao();
    } 
    else {
      this.tutorService.createTutor(this.formTutor.value);
      this.snackBar.open('Tutor criado com sucesso!', 'Fechar')
      this.formTutor.reset();
      this.listaTutores();
    }
  }

  listaTutores() {
      this.tutores = this.tutorService.getTutors();
  }

  deletarTutor(id?: string) {
      id && this.tutorService.deleteTutor(id);
      this.tutores = this.tutorService.getTutors();

      this.tutoresFiltrados = this.query ? this.tutorService.readTutor(this.query) : this.tutores;
  }

  // UTILS
  buscaTutores(query: string) {
    this.query = query;
    this.tutoresFiltrados = this.tutorService.readTutor(this.query);
  }

  prepararEdicao(tutor: ITutor) {
    this.tutorEmEdicao = tutor;
    this.formTutor.patchValue(tutor);
    this.mostrarListagem = false;
  }

  cancelarEdicao() {
    this.tutorEmEdicao = null;
    this.formTutor.reset();
    this.mostrarListagem = true;
  }

}