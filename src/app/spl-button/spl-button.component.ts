import { Component, Input } from '@angular/core';

@Component({
  selector: 'spl-button',
  templateUrl: './spl-button.component.html',
  styleUrls: ['./spl-button.component.css']
})
export class SplButtonComponent {
  @Input() buttonText: string = 'Default Text';
}
