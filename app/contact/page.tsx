import ContactForm from "@/components/ContactForm";

const infoCards = [
  { icon: "📍", title: "Our Location", body: "Dar es Salaam, Tanzania" },
  { icon: "📞", title: "Phone", body: "+255 693 363 601" },
  { icon: "📧", title: "Email", body: "nestlyhouses@gmail.com" },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand to-brand-dark px-5 py-16 text-center text-white">
        <h1 className="mb-2 font-heading text-3xl font-bold md:text-4xl">Contact Us</h1>
        <p className="text-base opacity-90">We&apos;d love to hear from you</p>
      </section>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-5 py-20 md:grid-cols-2">
        <ContactForm />

        <div>
          <h2 className="mb-8 font-heading text-[28px] font-bold text-[#1a1a1a]">Get in Touch</h2>
          <div className="flex flex-col gap-6">
            {infoCards.map((card) => (
              <div
                key={card.title}
                className="flex items-center gap-5 rounded-xl bg-white p-6 shadow-[0_2px_16px_rgba(0,0,0,0.06)]"
              >
                <span className="text-3xl">{card.icon}</span>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-[#1a1a1a]">{card.title}</h3>
                  <p className="text-sm text-[#666]">{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
