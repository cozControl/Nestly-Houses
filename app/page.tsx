import Image from "next/image";
import Link from "next/link";
import HeroSearch from "@/components/HeroSearch";
import FeaturedProperties from "@/components/FeaturedProperties";
import { BASE_PATH } from "@/lib/basePath";

const cities = [
  { label: "Dar es Salaam", value: "dar es salaam", image: `${BASE_PATH}/images/property3.jpg` },
  { label: "Arusha", value: "arusha" },
  { label: "Zanzibar", value: "zanzibar" },
  { label: "Mwanza", value: "mwanza" },
  { label: "Dodoma", value: "dodoma", image: `${BASE_PATH}/images/property4.jpg` },
];

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-[560px] items-center justify-center overflow-hidden px-5 py-24 text-center">
        <Image
          src={`${BASE_PATH}/images/property3.jpg`}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,20,40,0.35)] to-[rgba(0,20,40,0.6)]" />
        <div className="relative flex flex-col items-center gap-6">
          <h1 className="max-w-2xl font-heading text-3xl font-bold leading-tight text-white md:text-[44px]">
            Find a home you&apos;ll love, anywhere in Tanzania
          </h1>
          <HeroSearch />
        </div>
      </section>

      <section className="px-5 py-10">
        <div className="mx-auto flex max-w-6xl gap-4 overflow-x-auto pb-2">
          {cities.map((city) => (
            <Link
              key={city.value}
              href={`/listings?city=${encodeURIComponent(city.value)}`}
              className="group flex w-[200px] flex-shrink-0 flex-col gap-2"
            >
              <div className="relative h-[120px] overflow-hidden rounded-xl">
                {city.image ? (
                  <Image
                    src={city.image}
                    alt=""
                    fill
                    sizes="200px"
                    className="object-cover transition group-hover:scale-105"
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-brand to-brand-dark transition group-hover:scale-105" />
                )}
              </div>
              <span className="text-sm font-semibold text-[#1a1a1a]">{city.label}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center font-heading text-3xl font-bold text-[#1a1a1a]">
            Featured Properties
          </h2>
          <FeaturedProperties />
        </div>
      </section>

      <section className="flex flex-wrap justify-center gap-x-16 gap-y-3 border-t border-[#eee] bg-white px-5 py-8 text-sm font-medium text-[#444]">
        <span>Verified listings</span>
        <span>Direct booking, no fees</span>
        <span>Built for Tanzania</span>
      </section>
    </>
  );
}
