import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IAgendamento } from 'src/app/models/Agendamento';
import { IPet } from 'src/app/models/Pet';
import { ITutor } from 'src/app/models/Tutor';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { PetService } from 'src/app/services/pet.service';
import { TutorService } from 'src/app/services/tutor.service';
import { AtendimentoService } from 'src/app/services/atendimento.service';

@Component({
  selector: 'app-agendamentos',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit {

  agendamentos: IAgendamento[] = [];
  agendamentosFiltrados: IAgendamento[] = [];
  pets: IPet[] = [];
  tutores: ITutor[] = [];
  agendamentoEmEdicao: IAgendamento | null = null;
  mostrarListagem = true;

  formAgendamento: FormGroup = new FormGroup({
    petId: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    hora: new FormControl('', Validators.required),
    tipo: new FormControl('', Validators.required),
    obs: new FormControl('')
  });

  constructor(
    private agendamentoService: AgendamentoService,
    private atendimentoService: AtendimentoService,
    private petService: PetService,
    private tutorService: TutorService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados() {
    this.agendamentos = this.agendamentoService.getAgendamentos();
    this.pets = this.petService.getPets();
    this.tutores = this.tutorService.getTutors();
    
    this.buscarAgendamentos('');
  }

  // CRUD
  salvarAgendamento() {
    if (this.formAgendamento.invalid) return;

    if (this.agendamentoEmEdicao) {
      const agendamentoAtualizado: IAgendamento = { ...this.formAgendamento.value, id: this.agendamentoEmEdicao.id };
      this.agendamentoService.updateAgendamento(agendamentoAtualizado);
      this.snackBar.open('Agendamento atualizado com sucesso!', 'Fechar', { duration: 3000 });
      this.cancelarEdicao();
    } else {
      this.agendamentoService.createAgendamento(this.formAgendamento.value);
      this.snackBar.open('Agendamento criado com sucesso!', 'Fechar', { duration: 3000 });
      this.formAgendamento.reset();
    }
    this.carregarDados();
  }

  buscarAgendamentos(agendamento: string) {    
    this.agendamentosFiltrados = this.agendamentoService.readAgendamentos(agendamento);
  }

  deletarAgendamento(id: string) {
    this.agendamentoService.deleteAgendamento(id);
    this.carregarDados();
    this.snackBar.open('Agendamento cancelado!', 'Fechar', { duration: 3000 });
  }

  // UTILS
  prepararEdicao(agendamento: IAgendamento) {
    this.agendamentoEmEdicao = agendamento;
    this.formAgendamento.patchValue(agendamento);
    this.mostrarListagem = false;
  }

  cancelarEdicao() {
    this.agendamentoEmEdicao = null;
    this.formAgendamento.reset();
    this.mostrarListagem = true;
  }  

  getNomePet(petId: string): string {
    const pet = this.pets.find(p => p.id === petId);
    return pet ? pet.nome : 'Pet não encontrado';
  }

  getInfoTutor(petId: string): string | void{
    const pet = this.pets.find(p => p.id === petId);
    if (pet) {
        const tutor = this.tutores.find(t => t.id === pet.tutorId);
        return tutor ? tutor.nome : 'Tutor não encontrado';
    }
    return '';
  }    
}