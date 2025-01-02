import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SplButtonComponent } from '../spl-button/spl-button.component';
import config from './hello-world.config';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SplButtonComponent
  ],
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {
  environment: string;

  constructor() {
    this.environment = config.env;
    console.debug('Environment:', this.environment);
  }
}
