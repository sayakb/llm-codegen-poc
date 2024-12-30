import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplButtonComponent } from '../spl-button/spl-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SplButtonComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { }
