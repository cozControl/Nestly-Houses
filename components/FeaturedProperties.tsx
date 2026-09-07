"use client";

import { useEffect, useState } from "react";
import PropertyCard from "@/components/PropertyCard";
import { fetchProperties, type Property } from "@/lib/properties";

export default function FeaturedProperties() {
  const [properties, setProperties] = useState<Property[] | null>(null);
  const [loadFailed, setLoadFailed] = useState(false);

  useEffect(() => {
    fetchProperties()
      .then(setProperties)
      .catch(() => setLoadFailed(true));
  }, []);

  if (loadFailed) {
    return (
      <p className="text-center text-base text-[#999]">
        Couldn&apos;t load featured properties right now.
      </p>
    );
  }

  if (properties === null) {
    return <p className="text-center text-base text-[#999]">Loading properties…</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
      {properties.slice(0, 3).map((property) => (
        <PropertyCard key={property.slug} property={property} />
      ))}
    </div>
  );
}
