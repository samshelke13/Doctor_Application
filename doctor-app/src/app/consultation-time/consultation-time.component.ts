import { Component } from '@angular/core';
import { UiMaterialModule } from '../shared/material.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-consultation-time',
  imports: [UiMaterialModule],
  templateUrl: './consultation-time.component.html',
  styleUrl: './consultation-time.component.scss'
})
export class ConsultationTimeComponent {
  displayedColumns: string[] = ['day', 'morning', 'evening'];
  consultationTimes = [
    { day: 'Monday', morning: '9:00 AM - 12:00 PM', evening: '5:00 PM - 8:00 PM' },
    { day: 'Tuesday', morning: '9:00 AM - 12:00 PM', evening: '5:00 PM - 8:00 PM' },
    { day: 'Wednesday', morning: '9:00 AM - 12:00 PM', evening: '5:00 PM - 8:00 PM' },
    { day: 'Thursday', morning: '9:00 AM - 12:00 PM', evening: '5:00 PM - 8:00 PM' },
    { day: 'Friday', morning: '9:00 AM - 12:00 PM', evening: '5:00 PM - 8:00 PM' },
    { day: 'Saturday', morning: '10:00 AM - 1:00 PM', evening: 'Closed' },
    { day: 'Sunday', morning: 'Closed', evening: 'Closed' }
  ];

}
