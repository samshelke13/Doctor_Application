import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutDoctorComponent } from './about-doctor/about-doctor.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ConsultationTimeComponent } from './consultation-time/consultation-time.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';



const routes: Routes = [
      {path: 'home', component: AppComponent},
      {path: 'about-doctor', component: AboutDoctorComponent},
      {path: 'services', component: ServicesComponent},
      {path: 'gallery', component: GalleryComponent},
      {path: 'contact-us', component: ContactUsComponent},
      {path: 'consultation-time', component: ConsultationTimeComponent},
      {path: 'book-appointment', component: BookAppointmentComponent},

      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }