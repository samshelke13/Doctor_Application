import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiMaterialModule } from './shared/material.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UiMaterialModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'doctor-app';
}
