import type { Property } from "@/lib/properties";

export const cityOptions: { value: Property["city"] | ""; label: string }[] = [
  { value: "", label: "All Cities" },
  { value: "dar es salaam", label: "Dar es Salaam" },
  { value: "arusha", label: "Arusha" },
  { value: "mwanza", label: "Mwanza" },
  { value: "zanzibar", label: "Zanzibar" },
];

export const bedsOptions = [
  { value: "", label: "Any Beds" },
  { value: "1", label: "1 Bedroom" },
  { value: "2", label: "2 Bedrooms" },
  { value: "3", label: "3 Bedrooms" },
  { value: "4", label: "4+ Bedrooms" },
];

export const priceOptions = [
  { value: "", label: "Any Price" },
  { value: "500000", label: "Under 500,000 TZS" },
  { value: "1000000", label: "Under 1,000,000 TZS" },
  { value: "2000000", label: "Under 2,000,000 TZS" },
  { value: "5000000", label: "Under 5,000,000 TZS" },
];
