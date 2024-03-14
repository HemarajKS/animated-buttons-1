import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from '../components/button/button.component';
import { rightArrow, rightArrowBlue } from '../assets/icons/icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-app';

  rightArrow = rightArrow;
  rightArrowBlue = rightArrowBlue;

  clickFunction = () => {
    alert('hello');
  };
}
