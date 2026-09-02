import { BASE_PATH } from "@/lib/basePath";

export type Property = {
  slug: string;
  name: string;
  location: string;
  city: "dar es salaam" | "arusha" | "mwanza" | "zanzibar";
  beds: number;
  baths: number;
  size: string;
  price: number;
  priceLabel: string;
  amenities: string[];
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
  },
];
