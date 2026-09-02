import Link from "next/link";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/lib/properties";

export default function HomePage() {
  const featured = properties.slice(0, 3);

  return (
    <>
      <section className="bg-gradient-to-br from-brand to-brand-dark px-5 py-24 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-4 font-heading text-3xl font-bold leading-tight md:text-[42px]">
            Reliable houses within your budget
          </h1>
          <p className="mb-8 text-base opacity-90 md:text-lg">
            Browse hundreds of verified rental properties across Dar es Salaam, Arusha, Mwanza and more.
          </p>
          <Link
            href="/listings"
            className="inline-block rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-brand transition hover:-translate-y-0.5 hover:bg-[#f0f0f0]"
          >
            Browse Listings
          </Link>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center font-heading text-3xl font-bold text-[#1a1a1a]">
            Featured Properties
          </h2>
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((property) => (
              <PropertyCard key={property.slug} property={property} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
