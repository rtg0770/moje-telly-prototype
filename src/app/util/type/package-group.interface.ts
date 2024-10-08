import { PackageCard } from './package-card.interface';

type showTypes = 'STANDART' | 'SPORT' | 'RED' | 'OKTAGON' | 'HBO';

export interface PackageGroup {
  title: string;
  color: string;
  gradient: string;
  showType?: showTypes;
  packages: PackageCard[];
}
