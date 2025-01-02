import { Component } from '@angular/core';

@Component({
  selector: 'app-gen-comp-abc',
  templateUrl: './gen-comp-abc.component.html',
  styleUrls: ['./gen-comp-abc.component.css']
})
export class GenCompAbcComponent {
  showOffcanvas = false;

  toggleOffcanvas() {
    this.showOffcanvas = !this.showOffcanvas;
  }
}