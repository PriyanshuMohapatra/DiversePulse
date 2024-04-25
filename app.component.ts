import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FstComponent } from './fst/fst.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import the FormsModule


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FstComponent,CommonModule,AppComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  formData = {
    name: '',
    email: '',
    feedback: '' // Add feedback property
  };
  onSubmit() {
    // Display alert with form data
    const message = `Name: ${this.formData.name}\nEmail: ${this.formData.email}\nFeedback: ${this.formData.feedback}`;
    alert(message);
  }


}
