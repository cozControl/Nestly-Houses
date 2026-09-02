const whyCards = [
  {
    icon: "✅",
    title: "Verified Listings",
    body: "Every property on Nestly is verified to ensure what you see is what you get.",
  },
  {
    icon: "📍",
    title: "Tanzania Focused",
    body: "Built specifically for Tanzania — we understand the local rental market inside out.",
  },
  {
    icon: "💬",
    title: "Direct Booking",
    body: "Book directly with no hidden fees or complicated processes.",
  },
  {
    icon: "🔒",
    title: "Safe & Secure",
    body: "Your privacy and security matter to us at every step of your journey.",
  },
];

const stats = [
  { value: "500+", label: "Properties Listed" },
  { value: "4", label: "Cities Covered" },
  { value: "1000+", label: "Happy Guests" },
  { value: "100%", label: "Verified Listings" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand to-brand-dark px-5 py-16 text-center text-white">
        <h1 className="mb-2 font-heading text-3xl font-bold md:text-4xl">About Nestly Houses</h1>
        <p className="text-base opacity-90">Tanzania&apos;s trusted rental platform</p>
      </section>

      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="mb-20 flex flex-col items-center gap-14 md:flex-row">
          <div className="flex-1">
            <h2 className="mb-5 font-heading text-3xl font-bold text-[#1a1a1a]">Our Mission</h2>
            <p className="mb-4 text-base leading-relaxed text-[#555]">
              Nestly Houses was born from a simple idea — finding a rental home in Tanzania should be
              easy, transparent, and stress-free. We connect guests with verified rental properties
              across Dar es Salaam, Arusha, Mwanza, Zanzibar and beyond.
            </p>
            <p className="text-base leading-relaxed text-[#555]">
              No middlemen. No confusion. Just browse, find your perfect home, and book directly.
            </p>
          </div>
          <div className="flex h-[300px] flex-1 items-center justify-center rounded-2xl bg-brand-tint text-[100px]">
            🏡
          </div>
        </div>

        <div className="mb-20">
          <h2 className="mb-10 text-center font-heading text-3xl font-bold text-[#1a1a1a]">
            Why Choose Nestly Houses?
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyCards.map((card) => (
              <div
                key={card.title}
                className="rounded-xl bg-white p-8 text-center shadow-[0_2px_16px_rgba(0,0,0,0.06)] transition hover:-translate-y-1"
              >
                <span className="mb-4 block text-4xl">{card.icon}</span>
                <h3 className="mb-2 text-base font-semibold text-[#1a1a1a]">{card.title}</h3>
                <p className="text-sm leading-relaxed text-[#666]">{card.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 rounded-2xl bg-gradient-to-br from-brand to-brand-dark p-8 md:grid-cols-4 md:p-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center text-white">
              <h3 className="mb-2 font-heading text-[42px] font-bold">{stat.value}</h3>
              <p className="text-sm opacity-85">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
