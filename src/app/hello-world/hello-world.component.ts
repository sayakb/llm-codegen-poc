import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplButtonComponent } from '../spl-button/spl-button.component';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [CommonModule, SplButtonComponent],
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent { }
