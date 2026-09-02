"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { cityOptions, bedsOptions } from "@/lib/filterOptions";

export default function HeroSearch() {
  const router = useRouter();
  const [city, setCity] = useState("");
  const [beds, setBeds] = useState("");

  function handleSearch() {
    const query = new URLSearchParams();
    if (city) query.set("city", city);
    if (beds) query.set("beds", beds);
    const qs = query.toString();
    router.push(`/listings${qs ? `?${qs}` : ""}`);
  }

  return (
    <div className="flex w-full max-w-xl flex-col overflow-hidden rounded-xl bg-white text-left shadow-[0_12px_40px_rgba(0,0,0,0.25)] sm:flex-row sm:items-stretch">
      <label className="flex flex-1 flex-col border-b border-[#eee] px-5 py-3 sm:border-b-0 sm:border-r">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-[#999]">City</span>
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="-ml-0.5 border-none bg-transparent p-0 text-sm font-medium text-[#1a1a1a] outline-none"
        >
          {cityOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </label>
      <label className="flex flex-1 flex-col border-b border-[#eee] px-5 py-3 sm:border-b-0 sm:border-r">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-[#999]">Beds</span>
        <select
          value={beds}
          onChange={(e) => setBeds(e.target.value)}
          className="-ml-0.5 border-none bg-transparent p-0 text-sm font-medium text-[#1a1a1a] outline-none"
        >
          {bedsOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </label>
      <div className="flex items-center p-2">
        <button
          onClick={handleSearch}
          className="w-full whitespace-nowrap rounded-lg bg-brand px-7 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
        >
          Search
        </button>
      </div>
    </div>
  );
}
