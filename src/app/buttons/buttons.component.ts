// src/app/centered-buttons/centered-buttons.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  onButtonClick(buttonName: string) {
    console.log(`${buttonName} clicked`);
    // Add your logic here
  }
}
