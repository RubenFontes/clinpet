export interface IAgendamento {
    id: string;
    petId: string;
    tipo: string;
    hora: string;
    status: string;
    obs?: string;
}