import { BASE_PATH } from "@/lib/basePath";

export type Property = {
  slug: string;
  name: string;
  location: string;
  city: "dar es salaam" | "arusha" | "mwanza" | "zanzibar" | "dodoma";
  beds: number;
  baths: number;
  size: string;
  price: number;
  priceLabel: string;
  amenities: string[];
  description: string;
  image?: string;
};

export const properties: Property[] = [
  {
    slug: "modern-apartment-masaki",
    name: "Modern Apartment in Masaki",
    location: "Masaki, Dar es Salaam",
    city: "dar es salaam",
    beds: 3,
    baths: 2,
    size: "120m²",
    price: 1200000,
    priceLabel: "TZS 1,200,000 / mo",
    amenities: ["WiFi", "Parking", "Security"],
    description:
      "A modern three-bedroom apartment in Masaki, one of Dar es Salaam's leafier residential neighborhoods. Two bathrooms and 120m² of living space, with on-site parking, security, and WiFi included.",
    image: `${BASE_PATH}/images/property1.jpg`,
  },
  {
    slug: "cozy-studio-mikocheni",
    name: "Cozy Studio in Mikocheni",
    location: "Mikocheni, Dar es Salaam",
    city: "dar es salaam",
    beds: 1,
    baths: 1,
    size: "45m²",
    price: 450000,
    priceLabel: "TZS 450,000 / mo",
    amenities: ["WiFi", "Water"],
    description:
      "A compact 45m² studio in Mikocheni, well suited to a single tenant or couple. Water and WiFi are included in the listed rent.",
    image: `${BASE_PATH}/images/property2.jpg`,
  },
  {
    slug: "spacious-villa-mbezi-beach",
    name: "Spacious Villa in Mbezi Beach",
    location: "Mbezi Beach, Dar es Salaam",
    city: "dar es salaam",
    beds: 4,
    baths: 3,
    size: "250m²",
    price: 3500000,
    priceLabel: "TZS 3,500,000 / mo",
    amenities: ["Pool", "Parking", "Generator"],
    description:
      "A four-bedroom, three-bathroom villa near Mbezi Beach, with 250m² of space, a private pool, on-site parking, and a backup generator.",
    image: `${BASE_PATH}/images/property3.jpg`,
  },
  {
    slug: "modern-flat-arusha-cbd",
    name: "Modern Flat in Arusha CBD",
    location: "CBD, Arusha",
    city: "arusha",
    beds: 2,
    baths: 1,
    size: "80m²",
    price: 800000,
    priceLabel: "TZS 800,000 / mo",
    amenities: ["WiFi", "Security"],
    description:
      "A two-bedroom flat in the heart of Arusha's CBD, 80m² with one bathroom, WiFi, and on-site security — close to shops and services.",
  },
  {
    slug: "beachfront-apartment-zanzibar",
    name: "Beachfront Apartment in Zanzibar",
    location: "Nungwi, Zanzibar",
    city: "zanzibar",
    beds: 2,
    baths: 2,
    size: "95m²",
    price: 1500000,
    priceLabel: "TZS 1,500,000 / mo",
    amenities: ["Beach Access", "WiFi"],
    description:
      "A two-bedroom, two-bathroom apartment in Nungwi, Zanzibar, with direct beach access. 95m² of living space with WiFi included.",
  },
  {
    slug: "lake-view-home-mwanza",
    name: "Lake View Home in Mwanza",
    location: "Capri Point, Mwanza",
    city: "mwanza",
    beds: 3,
    baths: 2,
    size: "140m²",
    price: 900000,
    priceLabel: "TZS 900,000 / mo",
    amenities: ["Lake View", "Parking", "Garden"],
    description:
      "A three-bedroom home on Capri Point, Mwanza, with views of Lake Victoria. 140m² of space, two bathrooms, a garden, and on-site parking.",
  },
];
