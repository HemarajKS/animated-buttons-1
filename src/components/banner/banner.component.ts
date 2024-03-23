import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { rightArrow } from '../../assets/icons/icons';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
})
export class BannerComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() button: string = '';
  @Input() image: string = '';

  rightArrow = rightArrow;
}
