import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { OnInit } from '@angular/core';
import { TutorService } from '../../services/tutor.service';
import { ITutor } from 'src/app/models/Tutor';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tutores',
  templateUrl: './tutores.component.html',
  styleUrls: ['./tutores.component.css']
})

export class TutoresComponent {

  tutores: ITutor[] = [];
  tutoresFiltrados: ITutor[] = [];
  mostrarListagem = false;
  tutorEmEdicao: ITutor | null = null;

  constructor (private tutorService: TutorService, private snackBar: MatSnackBar){}

  formTutor: FormGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    telefone: new FormControl,
    email: new FormControl('', [Validators.required, Validators.email]),
    endereco: new FormControl(''),
    cpf: new FormControl('', Validators.required)
  });

  formBuscaTutor = new FormControl('')

  // CRUD
  salvaTutor() {
    if (this.tutorEmEdicao) {
      const tutorAtualizado = { ...this.formTutor.value, id: this.tutorEmEdicao.id };
      this.tutorService.updateTutor(tutorAtualizado);
      this.snackBar.open('Tutor atualizado com sucesso!', 'Fechar')
      this.cancelarEdicao();
    } 

    this.tutorService.createTutor(this.formTutor.value);
    this.snackBar.open('Tutor atualizado com sucesso!', 'Fechar')
    this.formTutor.reset();
  }

  listaTutores() {
      this.tutores = this.tutorService.getTutors();
      this.handleShowCard()
  }

  deletarTutor(id?: string) {
      id && this.tutorService.deleteTutor(id);
      this.tutores = this.tutorService.getTutors();

      this.tutoresFiltrados = this.formBuscaTutor.value ? this.tutorService.readTutor(this.formBuscaTutor.value) : this.tutores;
  }

  // UTILS
  buscaTutores() {
    this.tutoresFiltrados = this.tutorService.readTutor(this.formBuscaTutor.value)    
  }

  handleShowCard() {
   this.mostrarListagem = !this.mostrarListagem;

    if (this.mostrarListagem) {
      this.tutoresFiltrados = this.tutores;
    }
  }

  prepararEdicao(tutor: ITutor) {
    this.tutorEmEdicao = tutor;
    this.formTutor.patchValue(tutor);
    this.mostrarListagem = false;
  }

  cancelarEdicao() {
    this.tutorEmEdicao = null;
    this.formTutor.reset();
  }

}