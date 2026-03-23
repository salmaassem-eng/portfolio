import { AfterViewInit, Component } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    new Typed('.typing', {
      strings: [
        'Front-End Developer',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });
  }
}
