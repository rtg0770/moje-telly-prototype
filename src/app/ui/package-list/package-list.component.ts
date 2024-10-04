import { Component, Input } from '@angular/core';
import { PackageCard } from '../../util/type/package-card.interface';
import { PackageCardComponent } from '../package-card/package-card.component';
import { PackageGroup } from '../../util/type/package-group.interface';

@Component({
  selector: 'ui-package-list',
  standalone: true,
  imports: [PackageCardComponent],
  templateUrl: './package-list.component.html',
  styleUrl: './package-list.component.scss',
})
export class PackageListComponent {
  @Input() packageGroup!: PackageGroup;
}
