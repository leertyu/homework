import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {
  @Input() control!: NgModel;
  @Input() messages: { [key: string]: string } = {};
  @Input() submitted: boolean = false;
}
