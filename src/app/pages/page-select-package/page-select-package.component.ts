import { Component } from '@angular/core';
import { PackageListComponent } from '../../ui/package-list/package-list.component';
import { PackageGroup } from '../../util/type/package-group.interface';
import { NavbarComponent } from '../../ui/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'page-select-package',
  standalone: true,
  imports: [CommonModule, PackageListComponent, NavbarComponent],
  templateUrl: './page-select-package.component.html',
  styleUrl: './page-select-package.component.scss',
})
export class PageSelectPackageComponent {
  packageGroups: PackageGroup[] = [
    {
      title: 'Standartní balíčky',
      color: '#1E1EC8',
      gradient: 'linear-gradient(90deg, #1E1EC8 0%, #4141EA 100%)',
      showType: 'STANDART',
      packages: [
        {
          label: 'Velký balíček',
          duration: 'na 30 dní',
          description: '127 TV kanálů, 91 v HD',
          previousPricePerMonth: 690,
          pricePerMonth: 650,
          pricePerDay: 22,
          selected: false,
        },
        {
          label: 'Střední balíček',
          duration: 'na 30 dní',
          description: '101 TV kanálů, 80 v HD',
          previousPricePerMonth: 490,
          pricePerMonth: 450,
          pricePerDay: 15,
          selected: true,
          chips: ['Oblíbené'],
        },
        {
          label: 'Malý balíček',
          duration: 'na 30 dní',
          description: '70 TV kanálů, 36 v HD',
          previousPricePerMonth: 270,
          pricePerMonth: 250,
          pricePerDay: 9,
          selected: false,
        },
      ],
    },
    {
      title: 'Sportovní balíčky',
      color: '#00C8A0',
      gradient: 'linear-gradient(90deg, #00C8A0 0%, #1BE1B9 100%)',
      showType: 'SPORT',
      packages: [
        {
          label: 'Sport online',
          duration: 'na 7 dní',
          pricePerMonth: 300,
          pricePerDay: 10,
          selected: false,
        },
        {
          label: 'Sport online',
          duration: 'na 30 dní',
          discount: 'o 72% výhodnější',
          pricePerMonth: 350,
          pricePerDay: 12,
          selected: false,
          chips: ['Oblíbené'],
        },
        {
          label: 'Sport online',
          duration: 'na 365 dní',
          discount: 'o 77% výhodnější',
          pricePerMonth: 3500,
          pricePerDay: 9,
          selected: false,
        },
      ],
    },
    {
      title: 'Red online',
      color: '#D00000',
      gradient: 'linear-gradient(90deg, #B80000 0%, #CF0000 100%)',
      showType: 'RED',
      packages: [
        {
          label: 'Red online',
          duration: 'na 7 dní',
          pricePerMonth: 200,
          pricePerDay: 7,
          selected: false,
        },
        {
          label: 'Red online',
          duration: 'na 30 dní',
          discount: 'o 72% výhodnější',
          pricePerMonth: 250,
          pricePerDay: 8,
          selected: false,
          chips: ['Oblíbené'],
        },
        {
          label: 'Red online',
          duration: 'na 365 dní',
          discount: 'o 77% výhodnější',
          pricePerMonth: 2500,
          pricePerDay: 7,
          selected: false,
        },
      ],
    },
    {
      title: 'OKTAGON balíček',
      color: '#FFD200',
      gradient:
        'linear-gradient(90deg, rgba(255, 249, 221, 0.80) 0%, rgba(255, 255, 255, 0.80) 100%)',
      showType: 'OKTAGON',
      packages: [
        {
          description: 'OKTAGON 61 BRNO bla bla',
          onePrice: 320,
          selected: false,
        },
      ],
    },
    {
      title: 'HBO balíček + max',
      color: '#1E1EC8',
      gradient:
        'linear-gradient(270deg, rgba(255, 255, 255, 0.10) 0%, rgba(30, 30, 200, 0.10) 100%)',
      showType: 'HBO',
      packages: [
        {
          label: 'HBO balíček',
          description: 'Základní 3 kanály HBO',
          pricePerMonth: 200,
          pricePerDay: 15,
          selected: false,
        },
        {
          label: 'MAX balíček',
          description: 'Základní 3 kanály MAX',
          pricePerMonth: 200,
          pricePerDay: 15,
          selected: false,
        },
      ],
    },
  ];
}
