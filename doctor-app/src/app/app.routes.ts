import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { AboutDoctorComponent } from './about-doctor/about-doctor.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { ConsultationTimeComponent } from './consultation-time/consultation-time.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'about-doctor', component: AboutDoctorComponent},
      {path: 'services', component: ServicesComponent},
      {path: 'gallery', component: GalleryComponent},
      {path: 'contact-us', component: ContactUsComponent},
      {path: 'consultation-time', component: ConsultationTimeComponent},
      {path: 'book-appointment', component: BookAppointmentComponent},

];
