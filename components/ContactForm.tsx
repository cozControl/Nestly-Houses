"use client";

import { FormEvent, useState } from "react";

const WEB3FORMS_ACCESS_KEY = "b879918d-3f41-4cc2-8ba3-642f6a3163d2";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name")?.toString().trim();
    const email = data.get("email")?.toString().trim();
    const message = data.get("message")?.toString().trim();

    if (!name || !email || !message) {
      alert("Please fill in your name, email and message!");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name,
          email,
          phone: data.get("phone"),
          subject: "New Nestly Houses Inquiry",
          message,
        }),
      });
      const result = await response.json();

      if (result.success) {
        form.reset();
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      <h2 className="mb-8 font-heading text-[28px] font-bold text-[#1a1a1a]">Send us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-[#333]">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your full name"
            className="w-full rounded-lg border-[1.5px] border-[#e0e0e0] bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#333]">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            className="w-full rounded-lg border-[1.5px] border-[#e0e0e0] bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-[#333]">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+255 693 363 601"
            className="w-full rounded-lg border-[1.5px] border-[#e0e0e0] bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
          />
        </div>
        <div>
          <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-[#333]">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            className="w-full rounded-lg border-[1.5px] border-[#e0e0e0] bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
            defaultValue=""
          >
            <option value="">Select a subject</option>
            <option value="booking">Property Booking</option>
            <option value="listing">List My Property</option>
            <option value="support">General Support</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-semibold text-[#333]">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell us how we can help you..."
            className="w-full rounded-lg border-[1.5px] border-[#e0e0e0] bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
          />
        </div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-lg bg-brand px-4 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-dark disabled:opacity-70"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
        {status === "sent" && (
          <p className="text-center text-sm text-[#2e7d32]">
            ✅ Message sent! We will get back to you shortly!
          </p>
        )}
        {status === "error" && (
          <p className="text-center text-sm text-red-600">Something went wrong. Please try again!</p>
        )}
      </form>
    </div>
  );
}
