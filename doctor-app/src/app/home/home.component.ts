import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UiMaterialModule } from '../shared/material.module';

@Component({
  selector: 'app-home',
  imports: [UiMaterialModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

