
import { TourPackageProps } from "./types";

export const tourPackages: TourPackageProps[] = [
  {
    id: "spiti-7d",
    title: "Spiti Valley Explorer",
    duration: "6 Nights 7 Days",
    batchPrice: "₹24,999",
    batchShare: "Per Person",
    batchPrice2: "₹22,999",
    batchShare2: "Group of 4+",
    privateTourPrices: {
      twoPersons: "₹32,999",
      threePersons: "₹29,999",
      fourPersons: "₹27,999",
      fivePersons: "₹25,999",
      tenPersons: "₹22,999"
    },
    inclusions: [
      "Accommodation (3-star hotels)",
      "Meals (Breakfast & Dinner)",
      "Transportation",
      "Sightseeing",
      "Local guide"
    ],
    exclusions: [
      "Flights",
      "Personal expenses",
      "Adventure activities",
      "Entry fees",
      "Travel insurance"
    ],
    image: "https://images.unsplash.com/photo-1602939579051-8aecf4432a56?q=80&w=2070&auto=format&fit=crop",
    delay: 0.1,
    hasFlights: false,
    type: "fixed",
    description: "Embark on an unforgettable journey through the magical Spiti Valley. Experience the unique culture, visit ancient monasteries, and witness breathtaking landscapes in this high-altitude desert mountain valley."
  },
  {
    id: "manali-5d",
    title: "Magical Manali",
    duration: "4 Nights 5 Days",
    batchPrice: "₹18,999",
    batchShare: "Per Person",
    batchPrice2: null,
    batchShare2: "",
    privateTourPrices: {
      twoPersons: "₹24,999",
      threePersons: "₹22,999",
      fourPersons: "₹20,999",
      fivePersons: "₹19,999",
      tenPersons: "₹17,999"
    },
    inclusions: [
      "Accommodation (3-star hotels)",
      "Meals (Breakfast only)",
      "Transportation",
      "Sightseeing",
      "Local guide"
    ],
    exclusions: [
      "Flights",
      "Personal expenses",
      "Adventure activities",
      "Entry fees",
      "Travel insurance"
    ],
    image: "https://images.unsplash.com/photo-1588083949404-c4f1ed1323b3?q=80&w=2070&auto=format&fit=crop",
    delay: 0.2,
    hasFlights: false,
    type: "fixed"
  },
  {
    id: "shimla-4d",
    title: "Shimla Retreat",
    duration: "3 Nights 4 Days",
    batchPrice: "₹14,999",
    batchShare: "Per Person",
    batchPrice2: "₹13,499",
    batchShare2: "Group of 4+",
    privateTourPrices: null,
    inclusions: [
      "Accommodation (3-star hotels)",
      "Meals (Breakfast)",
      "Transportation",
      "Sightseeing",
      "Local guide"
    ],
    exclusions: [
      "Flights",
      "Personal expenses",
      "Adventure activities",
      "Entry fees",
      "Travel insurance"
    ],
    image: "https://images.unsplash.com/photo-1539468134272-85970652362b?q=80&w=2069&auto=format&fit=crop",
    delay: 0.3,
    hasFlights: false,
    type: "fixed"
  },
  {
    id: "dharamshala-6d",
    title: "Dharamshala & McLeodganj",
    duration: "5 Nights 6 Days",
    batchPrice: "₹21,999",
    batchShare: "Per Person",
    batchPrice2: null,
    batchShare2: "",
    privateTourPrices: {
      twoPersons: "₹28,999",
      threePersons: "₹25,999",
      fourPersons: "₹23,999",
      fivePersons: "₹21,999",
      tenPersons: "₹19,999"
    },
    inclusions: [
      "Accommodation (3-star hotels)",
      "Meals (Breakfast & Dinner)",
      "Transportation",
      "Sightseeing",
      "Local guide"
    ],
    exclusions: [
      "Flights",
      "Personal expenses",
      "Adventure activities",
      "Entry fees",
      "Travel insurance"
    ],
    image: "https://images.unsplash.com/photo-1626015193020-74b54d9e1f8a?q=80&w=2071&auto=format&fit=crop",
    delay: 0.4,
    hasFlights: false,
    type: "fixed"
  },
  {
    id: "kinnaur-8d",
    title: "Kinnaur Valley Adventure",
    duration: "7 Nights 8 Days",
    batchPrice: "₹27,999",
    batchShare: "Per Person",
    batchPrice2: "₹25,499",
    batchShare2: "Group of 4+",
    privateTourPrices: {
      twoPersons: "₹34,999",
      threePersons: "₹31,999",
      fourPersons: "₹29,999",
      fivePersons: "₹27,999",
      tenPersons: "₹24,999"
    },
    inclusions: [
      "Accommodation (3-star hotels)",
      "Meals (Breakfast & Dinner)",
      "Transportation",
      "Sightseeing",
      "Local guide"
    ],
    exclusions: [
      "Flights",
      "Personal expenses",
      "Adventure activities",
      "Entry fees",
      "Travel insurance"
    ],
    image: "https://images.unsplash.com/photo-1539468134272-85970652362b?q=80&w=2069&auto=format&fit=crop",
    delay: 0.5,
    hasFlights: false,
    type: "fixed"
  },
  {
    id: "custom-7d",
    title: "Customized Himachal Tour",
    duration: "6 Nights 7 Days",
    batchPrice: null,
    batchShare: "",
    batchPrice2: null,
    batchShare2: "",
    privateTourPrices: {
      twoPersons: "₹34,999",
      threePersons: "₹31,999",
      fourPersons: "₹29,999",
      fivePersons: "₹27,999",
      tenPersons: "₹24,999"
    },
    privateTourLabel: "Customized Package Price",
    inclusions: [
      "Personalized itinerary",
      "Handpicked accommodations",
      "Private transportation",
      "Preferred meals",
      "Expert guide"
    ],
    exclusions: [
      "Flights",
      "Personal expenses",
      "Optional activities",
      "Entry fees",
      "Travel insurance"
    ],
    image: "https://images.unsplash.com/photo-1502786129293-79981df4e689?q=80&w=2069&auto=format&fit=crop",
    delay: 0.6,
    hasFlights: false,
    type: "custom"
  },
  {
    id: "luxury-10d",
    title: "Luxury Himachal Experience",
    duration: "9 Nights 10 Days",
    batchPrice: null,
    batchShare: "",
    batchPrice2: null,
    batchShare2: "",
    privateTourPrices: {
      twoPersons: "₹59,999",
      threePersons: "₹54,999",
      fourPersons: "₹49,999",
      fivePersons: "₹45,999",
      tenPersons: "₹39,999"
    },
    privateTourLabel: "Luxury Package Price",
    inclusions: [
      "Luxury accommodation",
      "All meals included",
      "Premium transportation",
      "VIP access to attractions",
      "Personal guide & assistant"
    ],
    exclusions: [
      "Flights",
      "Personal expenses",
      "Specialty experiences",
      "Gratuities",
      "Travel insurance"
    ],
    image: "https://images.unsplash.com/photo-1601142634808-38923a7cccd4?q=80&w=2070&auto=format&fit=crop",
    delay: 0.7,
    hasFlights: false,
    type: "custom"
  },
  {
    id: "adventure-9d",
    title: "Himachal Adventure Tour",
    duration: "8 Nights 9 Days",
    batchPrice: null,
    batchShare: "",
    batchPrice2: null,
    batchShare2: "",
    privateTourPrices: {
      twoPersons: "₹42,999",
      threePersons: "₹39,999",
      fourPersons: "₹36,999",
      fivePersons: "₹33,999",
      tenPersons: "₹29,999"
    },
    privateTourLabel: "Adventure Package Price",
    inclusions: [
      "Adventure-focused stays",
      "Activity equipment",
      "Transportation",
      "Breakfast & lunch",
      "Expert adventure guides"
    ],
    exclusions: [
      "Flights",
      "Personal expenses",
      "Optional activities",
      "Special equipment",
      "Travel insurance"
    ],
    image: "https://images.unsplash.com/photo-1455156218388-5e61b526818b?q=80&w=2070&auto=format&fit=crop",
    delay: 0.8,
    hasFlights: false,
    type: "custom"
  },
  {
    id: "family-6d",
    title: "Himachal Family Vacation",
    duration: "5 Nights 6 Days",
    batchPrice: null,
    batchShare: "",
    batchPrice2: null,
    batchShare2: "",
    privateTourPrices: {
      twoPersons: "₹31,999",
      threePersons: "₹28,999",
      fourPersons: "₹25,999",
      fivePersons: "₹23,999",
      tenPersons: "₹20,999"
    },
    privateTourLabel: "Family Package Price",
    inclusions: [
      "Family-friendly accommodations",
      "Meals (Breakfast & Dinner)",
      "Safe transportation",
      "Child-friendly activities",
      "Family guide"
    ],
    exclusions: [
      "Flights",
      "Personal expenses",
      "Optional activities",
      "Entry fees",
      "Travel insurance"
    ],
    image: "https://images.unsplash.com/photo-1506038634487-60a69ae4b7b1?q=80&w=2066&auto=format&fit=crop",
    delay: 0.9,
    hasFlights: false,
    type: "custom"
  }
];
