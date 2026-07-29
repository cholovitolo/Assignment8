import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-page.html',
  styleUrl: './form-page.css',
})
export class FormPage {
  submitted = false;

  feedbackForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    rating: new FormControl('', Validators.required),
    comments: new FormControl('', Validators.required),
  });

  onSubmit(): void {
    if (this.feedbackForm.valid) {
      console.log('Feedback submitted:', this.feedbackForm.value);
      this.submitted = true;
    }
  }
}
