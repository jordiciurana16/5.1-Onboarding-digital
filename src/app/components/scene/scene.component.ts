import {
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChildren,
  AfterViewInit,
} from '@angular/core';
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

  currentStep = 1;

  get previousButtonVisibility(): string {
    return this.currentStep === 2 || this.currentStep === 3
      ? 'visible'
      : 'hidden';
  }

  get nextButtonVisibility(): string {
    return this.currentStep === 1 || this.currentStep === 2
      ? 'visible'
      : 'hidden';
  }

  previousUser() {
    this.currentStep--;
  }

  nextUser() {
    this.currentStep++;
  }
}
