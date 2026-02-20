import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ITutor } from 'src/app/models/Tutor';

@Component({
  selector: 'app-tutores-form',
  templateUrl: './tutores-form.component.html',
  styleUrls: ['./tutores-form.component.css']
})
export class TutoresFormComponent {
  @Input() formTutor!: FormGroup;
  @Input() tutorEmEdicao: ITutor | null = null;

  @Output() salvar = new EventEmitter<void>();
  @Output() cancelar = new EventEmitter<void>();
}

