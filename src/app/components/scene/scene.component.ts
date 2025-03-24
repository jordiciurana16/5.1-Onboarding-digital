import { Component, OnInit } from '@angular/core';
import { StepsService } from '../../steps.service';
import { ISteps } from '../../i-steps';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scene',
  imports: [CommonModule],
  templateUrl: './scene.component.html',
  styleUrl: './scene.component.scss',
})
export class SceneComponent implements OnInit {
  steps: ISteps[] = [];
  constructor(private service: StepsService) {}

  ngOnInit(): void {
    this.steps = this.service.steps;
  }
}
