import { BASE_PATH } from "@/lib/basePath";
import { supabase } from "@/lib/supabaseClient";

export type Property = {
  slug: string;
  name: string;
  location: string;
  city: string;
  beds: number;
  baths: number;
  size: string;
  price: number;
  priceLabel: string;
  amenities: string[];
  description: string;
  image?: string;
};

type PropertyRow = {
  slug: string;
  name: string;
  location: string;
  city: string;
  beds: number;
  baths: number;
  size: string;
  price: number;
  price_label: string;
  amenities: string[] | null;
  description: string | null;
  image: string | null;
};

function mapRow(row: PropertyRow): Property {
  return {
    slug: row.slug,
    name: row.name,
    location: row.location,
    city: row.city,
    beds: row.beds,
    baths: row.baths,
    size: row.size,
    price: row.price,
    priceLabel: row.price_label,
    amenities: row.amenities ?? [],
    description: row.description ?? "",
    image: row.image ? `${BASE_PATH}/images/${row.image}` : undefined,
  };
}

export async function fetchProperties(): Promise<Property[]> {
  const { data, error } = await supabase
    .from("properties")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) throw error;
  return (data ?? []).map(mapRow);
}

export async function fetchPropertyBySlug(slug: string): Promise<Property | null> {
  const { data, error } = await supabase
    .from("properties")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error) throw error;
  return data ? mapRow(data) : null;
}
