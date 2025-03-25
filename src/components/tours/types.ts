
export interface TourPackageProps {
  id: string;
  title: string;
  duration: string;
  batchPrice?: string | null;
  batchShare?: string;
  batchPrice2?: string | null;
  batchShare2?: string;
  privateTourPrices?: {
    twoPersons: string;
    threePersons: string;
    fourPersons: string;
    fivePersons: string;
    tenPersons: string;
  } | null;
  inclusions: string[];
  exclusions: string[];
  image?: string;
  privateTourLabel?: string;
  batchLabel?: string;
  delay: number;
  hasFlights?: boolean;
  type?: 'fixed' | 'custom';
  description?: string;
  itinerary?: {
    day: string;
    title: string;
    description: string;
  }[];
}
