import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { properties } from "@/lib/properties";

export function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = properties.find((p) => p.slug === slug);

  if (!property) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-5 py-12">
      <Link href="/listings" className="mb-6 inline-block text-sm font-medium text-brand hover:text-brand-dark">
        &larr; Back to listings
      </Link>

      <div className="relative mb-6 h-[320px] w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#cce4f6] to-[#a8d1f0] md:h-[420px]">
        {property.image && (
          <Image
            src={property.image}
            alt={property.name}
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
          />
        )}
        <span className="absolute left-4 top-4 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
          Available
        </span>
      </div>

      <h1 className="mb-2 font-heading text-3xl font-bold text-[#1a1a1a]">{property.name}</h1>
      <p className="mb-4 text-[#666]">📍 {property.location}</p>

      <div className="mb-6 flex gap-6 border-b border-[#eee] pb-6 text-sm text-[#555]">
        <span>🛏 {property.beds} {property.beds === 1 ? "Bed" : "Beds"}</span>
        <span>🚿 {property.baths} {property.baths === 1 ? "Bath" : "Baths"}</span>
        <span>📐 {property.size}</span>
      </div>

      <h2 className="mb-2 font-heading text-xl font-bold text-[#1a1a1a]">About this home</h2>
      <p className="mb-6 leading-relaxed text-[#555]">{property.description}</p>

      <h2 className="mb-3 font-heading text-xl font-bold text-[#1a1a1a]">Amenities</h2>
      <div className="mb-8 flex flex-wrap gap-2">
        {property.amenities.map((amenity) => (
          <span key={amenity} className="rounded-full bg-brand-tint px-3 py-1.5 text-sm font-medium text-brand">
            {amenity}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between rounded-xl border border-[#eee] bg-white p-6">
        <span className="text-xl font-bold text-brand">{property.priceLabel}</span>
        <Link
          href="/contact"
          className="rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
        >
          Contact about this home
        </Link>
      </div>
    </div>
  );
}
