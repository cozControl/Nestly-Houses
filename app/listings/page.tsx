import { Suspense } from "react";
import ListingsBrowser from "@/components/ListingsBrowser";

export default function ListingsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand to-brand-dark px-5 py-16 text-center text-white">
        <h1 className="mb-2 font-heading text-3xl font-bold md:text-4xl">All Properties</h1>
        <p className="text-base opacity-90">Find your perfect rental home across Tanzania</p>
      </section>
      <Suspense>
        <ListingsBrowser />
      </Suspense>
    </>
  );
}
