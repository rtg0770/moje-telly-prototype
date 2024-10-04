import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { CustomCurrencyPipe } from '../../util/pipe/currency.pipe';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-package-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    MatButtonModule,
    CustomCurrencyPipe,
    RouterLink,
  ],
  templateUrl: './package-card.component.html',
  styleUrl: './package-card.component.scss',
})
export class PackageCardComponent {
  @Input() label!: string;
  @Input() duration?: string;
  @Input() description?: string;
  @Input() discount?: string;
  @Input() previousPricePerMonth?: number;
  @Input() pricePerMonth!: number;
  @Input() pricePerDay!: number;
  @Input() selected: boolean = false;
  @Input() chips?: string[];
  @Input() gradient?: string;
  @Input() color!: string;

  hovering: boolean = false;

  toggleSelection() {
    this.selected = !this.selected;
  }
}
