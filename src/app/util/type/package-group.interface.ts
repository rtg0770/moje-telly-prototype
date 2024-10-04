import { PackageCard } from './package-card.interface';

export interface PackageGroup {
  title: string;
  color: string;
  gradient: string;
  packages: PackageCard[];
}
