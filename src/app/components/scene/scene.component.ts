import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  bootstrapArrowLeft,
  bootstrapArrowRight,
} from '@ng-icons/bootstrap-icons';
import { CommonModule } from '@angular/common';
import { ISteps } from '../../i-steps';

@Component({
  selector: 'app-scene',
  imports: [CommonModule, NgIcon],
  templateUrl: './scene.component.html',
  styleUrl: './scene.component.scss',
  viewProviders: [provideIcons({ bootstrapArrowLeft, bootstrapArrowRight })],
})
export class SceneComponent {
  @Input() steps: ISteps[] = [];
}
