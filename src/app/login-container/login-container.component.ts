import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.css'],
})
export class LoginContainerComponent {
  @Input() isActive: boolean = false;
  @Output() toggleActive: EventEmitter<boolean> = new EventEmitter<boolean>();

  handleClick() {
    this.toggleActive.emit(!this.isActive);
  }
}
