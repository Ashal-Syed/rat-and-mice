// components/sections/Pricing.tsx
"use client";

import Link from "next/link";

const tiers = [
  {
    name: "Basic",
    price: "99",
    period: "/visit",
    features: ["Inspection", "Bait stations", "7-day support"],
    cta: { label: "Get Basic", href: "#contact" },
  },
  {
    name: "Standard",
    price: "199",
    period: "/month",
    features: ["Everything in Basic", "Follow-up visit", "Entry-point proofing"],
    cta: { label: "Choose Standard", href: "#contact" },
    highlighted: true,
  },
  {
    name: "Premium",
    price: "349",
    period: "/month",
    features: ["Everything in Standard", "Same-day callout", "Quarterly service"],
    cta: { label: "Go Premium", href: "#contact" },
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="w-full p-7">
      <div className="mx-auto max-w-6xl">
        <header className="text-center py-10 flex flex-col">
          <h2 className="red-gradient-text text-5xl font-bold">Pricing</h2>
          <p className="text-sm text-gray-500">Simple plans for homes and businesses</p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`group relative rounded-2xl border border-white/20 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl ${
                t.highlighted ? "ring-2 ring-[#a22926]" : ""
              }`}
            >
              {t.highlighted && (
                <div className="absolute -top-3 right-4 rounded-full red-gradient px-3 py-1 text-xs font-semibold text-white">
                  Popular
                </div>
              )}

              <h3 className="text-lg font-semibold">{t.name}</h3>

              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-bold">${t.price}</span>
                <span className="text-sm text-gray-500">{t.period}</span>
              </div>

              <ul className="mt-6 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#a22926]" />
                    <span className="text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={t.cta.href}
                className={`mt-8 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300
                ${t.highlighted ? "red-gradient text-white hover:scale-[1.02]" : "dark-gradient text-white hover:scale-[1.02]"}`}
                aria-label={t.cta.label}
              >
                {t.cta.label}
              </Link>

              <div className="pointer-events-none absolute inset-0 rounded-2xl transition-all duration-300 group-hover:ring-1 group-hover:ring-black/10" />
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-gray-500">
          Prices include GST. Custom plans available on request.
        </p>
      </div>
    </section>
  );
}
