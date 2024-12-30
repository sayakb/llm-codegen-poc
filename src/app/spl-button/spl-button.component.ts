import { Component, Input } from '@angular/core';
import config from './spl-button.config';

@Component({
  selector: 'spl-button',
  templateUrl: './spl-button.component.html',
  styleUrls: ['./spl-button.component.css']
})
export class SplButtonComponent {
  @Input() buttonText: string = 'Default Text';
  environment: string;

  constructor() {
    this.environment = config.env;
    console.debug('Environment:', this.environment);
  }
}
