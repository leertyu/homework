import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-validate-error',
  templateUrl: './validate-error.component.html',
  styleUrl: './validate-error.component.css'
})
export class ValidateErrorComponent {
  @Input() control!: NgModel;
  @Input() messages: { [key: string]: string } = {};
  @Input() submitted: boolean = false;
}
