"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BASE_PATH } from "@/lib/basePath";

const links = [
  { href: "/", label: "Home" },
  { href: "/listings", label: "Listings" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[100] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image src={`${BASE_PATH}/images/logo.png`} alt="Nestly Logo" width={28} height={28} className="h-7 w-auto" />
          <span className="font-heading text-xl font-bold text-brand">Nestly Houses</span>
        </Link>

        <ul className="hidden gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-[15px] font-medium transition-colors hover:text-brand ${
                  pathname === link.href ? "font-semibold text-brand" : "text-[#333]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col justify-center gap-[5px] p-1 md:hidden"
        >
          <span
            className={`block h-0.5 w-6 rounded bg-[#333] transition-transform ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span className={`block h-0.5 w-6 rounded bg-[#333] transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-0.5 w-6 rounded bg-[#333] transition-transform ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>

        {open && (
          <ul className="absolute left-0 right-0 top-full z-[99] flex flex-col bg-white py-2 shadow-[0_4px_12px_rgba(0,0,0,0.1)] md:hidden">
            {links.map((link) => (
              <li key={link.href} className="border-b border-[#f0f0f0] last:border-none">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block px-6 py-3.5 text-[15px] hover:bg-[#f5f9ff] hover:text-brand ${
                    pathname === link.href ? "font-semibold text-brand" : "text-[#333]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
