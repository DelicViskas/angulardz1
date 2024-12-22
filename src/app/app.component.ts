import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CityInfoComponent } from './city-info/city-info.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CityInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'novosibirsk-info';
}
