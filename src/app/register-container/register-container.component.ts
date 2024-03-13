import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-register-container',
  templateUrl: './register-container.component.html',
  styleUrls: ['./register-container.component.css'],
})
export class RegisterContainerComponent {
  @Input() isActive: boolean = false;
  @Output() toggleActive: EventEmitter<boolean> = new EventEmitter<boolean>();

  handleClick() {
    this.toggleActive.emit(!this.isActive);
  }
}
