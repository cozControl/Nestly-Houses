import Image from "next/image";
import Link from "next/link";
import type { Property } from "@/lib/properties";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-[0_2px_16px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,113,188,0.15)]">
      <div className="relative flex h-[200px] items-start bg-gradient-to-br from-[#cce4f6] to-[#a8d1f0] p-3">
        {property.image && (
          <Image
            src={property.image}
            alt={property.name}
            fill
            sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        )}
        <span className="relative rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
          Available
        </span>
      </div>
      <div className="p-5">
        <h3 className="mb-1.5 text-lg font-semibold text-[#1a1a1a]">{property.name}</h3>
        <p className="mb-3 text-sm text-[#666]">📍 {property.location}</p>
        <div className="mb-4 flex gap-4 text-[13px] text-[#555]">
          <span>🛏 {property.beds} {property.beds === 1 ? "Bed" : "Beds"}</span>
          <span>🚿 {property.baths} {property.baths === 1 ? "Bath" : "Baths"}</span>
          <span>📐 {property.size}</span>
        </div>
        {property.amenities.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-1.5">
            {property.amenities.map((tag) => (
              <span key={tag} className="rounded-full bg-brand-tint px-2.5 py-1 text-[11px] font-semibold text-brand">
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="flex items-center justify-between border-t border-[#f0f0f0] pt-4">
          <span className="text-[15px] font-bold text-brand">{property.priceLabel}</span>
          <Link
            href={`/listings/${property.slug}`}
            className="rounded-md bg-brand px-5 py-2.5 text-sm font-medium text-white transition hover:bg-brand-dark"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
