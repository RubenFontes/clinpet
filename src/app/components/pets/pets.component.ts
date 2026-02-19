import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IPet } from 'src/app/models/Pet';
import { ITutor } from 'src/app/models/Tutor';
import { PetService } from 'src/app/services/pet.service';
import { TutorService } from 'src/app/services/tutor.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

    ngOnInit(): void {
    this.carregarDados();
  }

  pets: IPet[] = [];
  petsFiltrados: IPet[] = [];
  tutores: ITutor[] = [];
  petEmEdicao: IPet | null = null;
  mostrarListagem = true;

  formPet: FormGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    especie: new FormControl('', Validators.required),
    raca: new FormControl(''),
    sexo: new FormControl(''),
    dataNascimento: new FormControl(''),
    obs: new FormControl(''),
    tutorId: new FormControl('', Validators.required)
  });

  constructor(
    private petService: PetService,
    private tutorService: TutorService,
    private snackBar: MatSnackBar
  ) {}

  carregarDados() {
    this.tutores = this.tutorService.getTutors();
    this.pets = this.petService.getPets();
    this.petsFiltrados = this.pets;
  }

  // CRUD
  salvarPet() {
    if (this.formPet.invalid) return;

    if (this.petEmEdicao) {
      const petAtualizado: IPet = { ...this.formPet.value, id: this.petEmEdicao.id };
      this.petService.updatePet(petAtualizado);
      this.snackBar.open('Pet atualizado com sucesso!', 'Fechar', { duration: 3000 });
      this.cancelarEdicao();
    } else {
      this.petService.createPet(this.formPet.value);
      this.snackBar.open('Pet cadastrado com sucesso!', 'Fechar', { duration: 3000 });
      this.formPet.reset();
    }
    this.carregarDados();
  }

    buscarPets(pet: string) {
    this.petsFiltrados = this.petService.readPets(pet);
  }

    deletarPet(id: string) {
    this.petService.deletePet(id);
    this.carregarDados();
    this.snackBar.open('Pet excluído!', 'Fechar', { duration: 3000 });
  }

  // UTILS
  getNomeTutor(tutorId: string): string | void {
    const tutor = this.tutores.find(t => t.id === tutorId);
    if(tutor) {
      return tutor.nome
    }
  }

  prepararEdicao(pet: IPet) {
    this.petEmEdicao = pet;
    this.formPet.patchValue(pet);
    this.mostrarListagem = false;
  }

  cancelarEdicao() {
    this.petEmEdicao = null;
    this.formPet.reset();
    this.mostrarListagem = true;
  }
}