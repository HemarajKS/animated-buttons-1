import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) {}
  x: any;

  @Input() label: string = '';
  @Input() backgroundClr: string = '#cd1242';
  @Input() textClr1: string = '';
  @Input() textClr2: string = '';
  @Input() icon: string = '';
  @Input() border: boolean = false;
  @Output() onClick = new EventEmitter<void>();

  ngOnInit() {
    this.x = this.sanitizer.bypassSecurityTrustHtml(this.icon);
  }

  onButtonClick() {
    this.onClick.emit();
  }

  isHovered: boolean = false;

  onHover() {
    this.isHovered = true;
  }

  onMouseOut() {
    this.isHovered = false;
  }

  applySVGStyles(event: any) {
    if (this.icon && this.textClr1 && this.textClr2) {
      const target = event.currentTarget as HTMLElement;
      const svgElement = target.querySelector('.icon svg path') as SVGElement;
      if (svgElement) {
        svgElement.setAttribute(
          'fill',
          this.isHovered ? this.textClr2 : this.textClr1
        );
        svgElement.style.transition = 'fill 1.2s ease';
      }
    }
  }
}
