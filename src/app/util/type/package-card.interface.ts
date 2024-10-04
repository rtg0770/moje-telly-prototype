export interface PackageCard {
  label: string;
  duration?: string;
  description?: string;
  discount?: string;
  previousPricePerMonth?: number;
  pricePerMonth: number;
  pricePerDay: number;
  selected: boolean;
  chips?: string[];
}
