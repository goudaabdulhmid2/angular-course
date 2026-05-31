import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Students } from './students/students';
import { Products } from './products/products';

@Component({
  selector: 'app-root',
  imports: [Students, Products],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lab1');
}
