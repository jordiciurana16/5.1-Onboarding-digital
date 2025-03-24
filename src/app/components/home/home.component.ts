import { Component, OnInit } from '@angular/core';
import { SceneComponent } from '../scene/scene.component';
import { ISteps } from '../../i-steps';
import { StepsService } from '../../steps.service';

@Component({
  selector: 'app-home',
  imports: [SceneComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  steps: ISteps[] = [];

  constructor(private service: StepsService) {}

  ngOnInit(): void {
    this.steps = this.service.steps;
  }
}
