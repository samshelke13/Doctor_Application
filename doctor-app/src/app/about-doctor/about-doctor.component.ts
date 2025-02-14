import { Component } from '@angular/core';
import { NgImageSliderModule } from 'ng-image-slider';
import { UiMaterialModule } from '../shared/material.module';

@Component({
  selector: 'app-about-doctor',
  imports: [NgImageSliderModule,UiMaterialModule],
  templateUrl: './about-doctor.component.html',
  styleUrl: './about-doctor.component.scss'
})
export class AboutDoctorComponent {

  imageObject: Array<object> = [{
    image: 'assets/dr-vishal1.png',
    thumbImage: 'assets/dr-vishal1.png',

}, {
    image: 'assets/dr-vishal2.jpg', // Support base64 image
    thumbImage: 'assets/dr-vishal2.jpg', // Support base64 image
    order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: 'assets/dr-vishal3.jpg', // Support base64 image
  thumbImage: 'assets/dr-vishal3.jpg', // Support base64 image
  order: 2 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: 'assets/dr-vishal4.jpg', // Support base64 image
  thumbImage: 'assets/dr-vishal4.jpg', // Support base64 image
  order: 3 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
];
}
