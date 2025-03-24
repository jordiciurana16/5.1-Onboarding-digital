import { Injectable } from '@angular/core';
import { ISteps } from './i-steps';

@Injectable({
  providedIn: 'root',
})
export class StepsService {
  steps: ISteps[] = [
    {
      title: 'Step 1',
      description: 'This is step 1',
      image: 'https://via.placeholder.com/150',
      bgcolor: '#FF5733',
    },
    {
      title: 'Step 2',
      description: 'This is step 2',
      image: 'https://via.placeholder.com/150',
      bgcolor: '#FF5733',
    },
    {
      title: 'Step 3',
      description: 'This is step 3',
      image: 'https://via.placeholder.com/150',
      bgcolor: '#FF5733',
    },
  ];

  constructor() {}
}
