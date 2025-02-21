import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UiMaterialModule } from './shared/material.module';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from "./shared/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UiMaterialModule, HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'doctor-app';
}
