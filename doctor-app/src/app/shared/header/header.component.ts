import { Component } from '@angular/core';
import { UiMaterialModule } from '../material.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [UiMaterialModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
