import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UiMaterialModule } from '../shared/material.module';

@Component({
  selector: 'app-book-appointment',
  imports: [UiMaterialModule],
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.scss']
})
export class BookAppointmentComponent {
  appointmentForm: FormGroup;
  timeSlots: string[] = ['9:00 AM - 10:00 AM', '10:00 AM - 11:00 AM', '11:00 AM - 12:00 PM', '5:00 PM - 6:00 PM', '6:00 PM - 7:00 PM'];

  constructor(private fb: FormBuilder) {
    this.appointmentForm = this.fb.group({
      fullName: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      appointmentDate: ['', Validators.required],
      timeSlot: ['', Validators.required]
    });
  }

  submitAppointment() {
    if (this.appointmentForm.valid) {
      console.log('Appointment Details:', this.appointmentForm.value);
      alert('Appointment Booked Successfully!');
      this.appointmentForm.reset();
    }
  }
}
