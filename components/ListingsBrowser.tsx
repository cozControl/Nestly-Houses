"use client";

import { useMemo, useState } from "react";
import PropertyCard from "@/components/PropertyCard";
import type { Property } from "@/lib/properties";

const cityOptions: { value: Property["city"] | ""; label: string }[] = [
  { value: "", label: "All Cities" },
  { value: "dar es salaam", label: "Dar es Salaam" },
  { value: "arusha", label: "Arusha" },
  { value: "mwanza", label: "Mwanza" },
  { value: "zanzibar", label: "Zanzibar" },
];

const bedsOptions = [
  { value: "", label: "Any Beds" },
  { value: "1", label: "1 Bedroom" },
  { value: "2", label: "2 Bedrooms" },
  { value: "3", label: "3 Bedrooms" },
  { value: "4", label: "4+ Bedrooms" },
];

const priceOptions = [
  { value: "", label: "Any Price" },
  { value: "500000", label: "Under 500,000 TZS" },
  { value: "1000000", label: "Under 1,000,000 TZS" },
  { value: "2000000", label: "Under 2,000,000 TZS" },
  { value: "5000000", label: "Under 5,000,000 TZS" },
];

export default function ListingsBrowser({ properties }: { properties: Property[] }) {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [beds, setBeds] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filtered = useMemo(() => {
    const term = search.toLowerCase();
    return properties.filter((property) => {
      const matchesSearch =
        term === "" ||
        property.name.toLowerCase().includes(term) ||
        property.location.toLowerCase().includes(term);
      const matchesCity = city === "" || property.city === city;
      const matchesBeds =
        beds === "" || (beds === "4" ? property.beds >= 4 : property.beds === Number(beds));
      const matchesPrice = maxPrice === "" || property.price <= Number(maxPrice);
      return matchesSearch && matchesCity && matchesBeds && matchesPrice;
    });
  }, [properties, search, city, beds, maxPrice]);

  return (
    <>
      <section className="sticky top-[73px] z-[90] bg-white px-5 py-6 shadow-[0_2px_10px_rgba(0,0,0,0.06)]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="🔍  Search by location or property name..."
            className="min-w-[200px] flex-1 rounded-lg border-[1.5px] border-[#e0e0e0] px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
          />
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="cursor-pointer rounded-lg border-[1.5px] border-[#e0e0e0] bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
          >
            {cityOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <select
            value={beds}
            onChange={(e) => setBeds(e.target.value)}
            className="cursor-pointer rounded-lg border-[1.5px] border-[#e0e0e0] bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
          >
            {bedsOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <select
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="cursor-pointer rounded-lg border-[1.5px] border-[#e0e0e0] bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
          >
            {priceOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </section>

      <section className="px-5 py-10">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-sm text-[#666]">
            Showing {filtered.length} propert{filtered.length === 1 ? "y" : "ies"}
          </p>
          {filtered.length === 0 ? (
            <p className="py-16 text-center text-base text-[#999]">
              No properties found. Try adjusting your filters.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((property) => (
                <PropertyCard key={property.slug} property={property} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
