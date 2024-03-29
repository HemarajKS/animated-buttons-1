import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from '../components/button/button.component';
import { rightArrow, rightArrowBlue } from '../assets/icons/icons';
import { BannerComponent } from '../components/banner/banner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, BannerComponent],
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
