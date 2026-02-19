import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { IAtendimento } from 'src/app/models/Atendimento';
import { AtendimentoService } from 'src/app/services/atendimento.service';

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.css']
})
export class AtendimentoComponent implements OnInit {
  
  idAgendamento: string | null = null;
  atendimentoEmEdicao: IAtendimento | null = null;

  formAtendimento: FormGroup = new FormGroup({
    peso: new FormControl('', Validators.required),
    temperatura: new FormControl('', Validators.required),
    anotacoes: new FormControl(''),
    prescricao: new FormControl(''),
    retornoData: new FormControl('')
  });
  
  constructor(
    private route: ActivatedRoute,
    private atendimentoService: AtendimentoService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.idAgendamento = this.route.snapshot.paramMap.get('id');
    if (this.idAgendamento) {
      this.carregarAtendimento();
    }
  }

  // CRUD
  salvarAtendimento() {
    if (this.formAtendimento.invalid) return;
    if (!this.idAgendamento) {
      this.snackBar.open('Erro: Agendamento não identificado.', 'Fechar', { duration: 3000 });
      return;
    }

    if (this.atendimentoEmEdicao) {
      const atendimentoAtualizado: IAtendimento = { ...this.atendimentoEmEdicao, ...this.formAtendimento.value };
      this.atendimentoService.updateAtendimento(atendimentoAtualizado);
      this.snackBar.open('Atendimento atualizado com sucesso!', 'Fechar', { duration: 3000 });
    } else {
      const novoAtendimento: IAtendimento = { ...this.formAtendimento.value, idAgendamento: this.idAgendamento };
      this.atendimentoService.createAtendimento(novoAtendimento);
      this.snackBar.open('Atendimento registrado com sucesso!', 'Fechar', { duration: 3000 });
      this.carregarAtendimento();
    }
  }

  carregarAtendimento() {
    if (!this.idAgendamento) return;
    const atendimento = this.atendimentoService.getAtendimentoByAgendamento(this.idAgendamento);
    if (atendimento) {
      this.atendimentoEmEdicao = atendimento;
      this.formAtendimento.patchValue(atendimento);
    }
  }

  deletarAtendimento() {
    if (this.atendimentoEmEdicao && this.atendimentoEmEdicao.id && confirm('Tem certeza que deseja excluir este atendimento?')) {
      this.atendimentoService.deleteAtendimento(this.atendimentoEmEdicao.id);
      this.snackBar.open('Atendimento excluído!', 'Fechar', { duration: 3000 });
      this.formAtendimento.reset();
      this.atendimentoEmEdicao = null;
    }
  }
}
