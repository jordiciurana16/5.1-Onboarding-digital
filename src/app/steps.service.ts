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
      image: 'assets/time_managment.svg',
      bgcolor: '#4CA0A7',
    },
    {
      title: 'Programa projectes propis',
      description:
        'Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.',
      image: 'assets/programming.svg',
      bgcolor: '#D3D4D9',
    },
    {
      title: 'Procura descansar',
      description:
        "Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.",
      image: '/assets/meditation.svg',
      bgcolor: '#FFD167',
    },
  ];

  constructor() {}
}
