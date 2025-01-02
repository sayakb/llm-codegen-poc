import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gen-comp-abc',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gen-comp-abc.component.html',
  styleUrls: ['./gen-comp-abc.component.css']
})
export class GenCompAbcComponent {
  showOffcanvas = false;

  toggleOffcanvas() {
    this.showOffcanvas = !this.showOffcanvas;
  }
}