import { Injectable } from '@angular/core';
import { ITutor } from '../models/Tutor';

@Injectable({
  providedIn: 'root'
})
export class TutorService {

  private dataTutors: string = 'tutors';  

  constructor() { }

  // Helpers
  getTutors(): ITutor[] { 
    return JSON.parse(localStorage.getItem(this.dataTutors) || '[]');
  }
  
  saveTutor(tutors: ITutor[]): void {
    localStorage.setItem(this.dataTutors, JSON.stringify(tutors));
  }

  // CRUD
  createTutor(tutor: ITutor) {
    const tutors: ITutor[] = this.getTutors();

    tutor.id = crypto.randomUUID(); // gera ID
    
    tutors.push(tutor);
    this.saveTutor(tutors);
  }

  readTutor(nome?: string | null): ITutor[] {
    const tutores = this.getTutors();
    if(!nome){ 
      return tutores 
    } else {
      return tutores.filter(tutor => tutor.nome === nome);
    }    
  }

  updateTutor(tutor: ITutor) {
    const tutors = this.getTutors();
    const index = tutors.findIndex(t => t.id === tutor.id);
    if(index !== -1) {
      tutors[index] = tutor;
      this.saveTutor(tutors);
    }
  }

  deleteTutor(id: string) {
    let tutors = this.getTutors();
    tutors = tutors.filter(t => t.id !== id);
    this.saveTutor(tutors);
  }
}
