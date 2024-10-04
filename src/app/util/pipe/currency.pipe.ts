import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency',
  standalone: true,
})
export class CustomCurrencyPipe implements PipeTransform {
  transform(value: number, currency: 'CZK' | 'EUR' = 'CZK'): string {
    if (!value && value !== 0) return '';

    const formatter = new Intl.NumberFormat('cs-CZ', {
      style: 'currency',
      currency: currency === 'CZK' ? 'CZK' : 'EUR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return formatter.format(value); // Remove manual "Kč" appending
  }
}
