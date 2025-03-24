import { Injectable } from '@angular/core';
import { ISteps } from './i-steps';

@Injectable({
  providedIn: 'root',
})
export class StepsService {
  steps: ISteps[] = [
    {
      title: 'Dedica moltes hores',
      description:
        'Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.',
      image: 'https://via.placeholder.com/150',
      bgcolor: '#FF5733',
    },
    {
      title: 'Programa projectes propis',
      description:
        'Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.',
      image: 'https://via.placeholder.com/150',
      bgcolor: '#FF5733',
    },
    {
      title: 'Procura descansar',
      description:
        "Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.",
      image: 'https://via.placeholder.com/150',
      bgcolor: '#FF5733',
    },
  ];

  constructor() {}
}
