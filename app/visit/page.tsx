"use client";

import { useState } from "react";
import { FileDown } from "lucide-react";
import { GymSelector } from "@/components/shared/GymSelector";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import { gyms } from "@/lib/data/gyms";
import type { Gym } from "@/lib/types";

const faqItems = [
  {
    id: "faq-1",
    q: "Do I need to book in advance?",
    a: "No booking is required for general climbing sessions. You can walk in any time during opening hours. Booking is only required for courses, kids' sessions, and events.",
  },
  {
    id: "faq-2",
    q: "Can I bring kids?",
    a: "Yes! Children of all ages are welcome. Kids under 15 must be accompanied by an adult at all times. We recommend checking our Kids & Youth pricing for discounted entry.",
  },
  {
    id: "faq-3",
    q: "Do I need my own equipment?",
    a: "No. Climbing shoes and chalk bags can be rented at the reception desk. All climbing holds and mats are provided. We recommend wearing comfortable, close-fitting clothing.",
  },
  {
    id: "faq-4",
    q: "Is there parking available?",
    a: "Yes, free parking is available directly at the gym. Please refer to the directions section for exact parking instructions.",
  },
  {
    id: "faq-5",
    q: "Can I try climbing for the first time?",
    a: "Absolutely. No experience is needed. Our staff are on hand to introduce you to bouldering basics. First-timers are always welcome and no course or prior training is required.",
  },
];

const documents = [
  { label: "Consent Form (PDF)", href: "#" },
  { label: "Visitor Rules (PDF)", href: "#" },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-bold text-[#1A1A1A] mb-6">{children}</h2>
  );
}

function Divider() {
  return <div className="border-t border-[#E5E5E5]" />;
}

function ComingSoonBlock({ gym }: { gym: Gym }) {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-3 text-center">
      <p className="text-lg font-semibold text-[#1A1A1A]">
        Hangar {gym.name} — Coming soon
      </p>
      <p className="text-sm text-[#6B6B6B]">
        This location is not yet open. Stay tuned for updates.
      </p>
    </div>
  );
}

export default function VisitPage() {
  const [selectedGym, setSelectedGym] = useState<Gym>(gyms[0]);
  const isOpen = selectedGym.status === "open";

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-[300px] bg-[#D9D9D9]">
        <span className="absolute top-4 left-6 text-xs text-[#6B6B6B]">
          Hero image
        </span>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-4xl font-bold text-[#1A1A1A] mb-3">Visit Us</h1>
          <p className="text-[#6B6B6B] text-sm">
            Placeholder subtext lorem ipsum dolor sit amet consectetur adipiscing.
          </p>
        </div>
      </section>

      {/* ── Sticky GymSelector ── */}
      <div className="sticky top-16 z-40 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <GymSelector gyms={gyms} selected={selectedGym} onChange={setSelectedGym} />
        </div>
      </div>

      {/* ── Gym content ── */}
      {isOpen ? (
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl py-16 space-y-14">

            {/* Registration */}
            <section>
              <SectionTitle>Register online</SectionTitle>
              <p className="text-sm text-[#6B6B6B] mb-2">
                Placeholder text lorem ipsum dolor sit amet consectetur adipiscing elit.
              </p>
              <p className="text-sm text-[#6B6B6B] mb-6">
                Second line sed do eiusmod tempor incididunt ut labore et dolore.
              </p>
              <a href={selectedGym.registrationUrl} className={buttonVariants()}>
                Register
              </a>
            </section>

            <Divider />

            {/* Opening Hours */}
            <section>
              <SectionTitle>Opening Hours</SectionTitle>
              <table className="w-full text-sm">
                <tbody>
                  {selectedGym.openingHours.map((oh) => (
                    <tr key={oh.label} className="border-b border-[#E5E5E5] last:border-0">
                      <td className="py-3 font-medium text-[#1A1A1A] w-1/3">{oh.label}</td>
                      <td className="py-3 text-[#6B6B6B]">{oh.open}–{oh.close}</td>
                      {oh.note && (
                        <td className="py-3 text-xs text-[#6B6B6B]">{oh.note}</td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            <Divider />

            {/* Prices */}
            <section>
              <SectionTitle>Prices</SectionTitle>
              <Accordion
                key={selectedGym.id}
                multiple
                defaultValue={selectedGym.prices.map((p) => p.title)}
                className="border rounded-lg divide-y divide-[#E5E5E5] overflow-hidden"
              >
                {selectedGym.prices.map((category) => (
                  <AccordionItem
                    key={category.title}
                    value={category.title}
                    className="px-4 border-0"
                  >
                    <AccordionTrigger className="text-base font-semibold text-[#1A1A1A] py-4 hover:no-underline">
                      <span>
                        {category.title}
                        {category.footnote && (
                          <span className="ml-2 text-xs font-normal text-[#6B6B6B]">
                            {category.footnote}
                          </span>
                        )}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <table className="w-full text-sm mb-2">
                        <tbody>
                          {category.rows.map((row) => (
                            <tr key={row.label} className="border-b border-[#F2F2F2] last:border-0">
                              <td className="py-2 text-[#6B6B6B]">{row.label}</td>
                              <td className="py-2 text-right font-medium text-[#1A1A1A]">
                                {row.price}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            <Divider />

            {/* Documents */}
            <section>
              <SectionTitle>Documents</SectionTitle>
              <ul className="divide-y divide-[#E5E5E5] border rounded-lg overflow-hidden">
                {documents.map((doc) => (
                  <li key={doc.label}>
                    <a
                      href={doc.href}
                      className="flex items-center justify-between px-4 py-3.5 text-sm text-[#1A1A1A] hover:bg-[#F2F2F2] transition-colors"
                    >
                      <span>{doc.label}</span>
                      <FileDown size={16} className="text-[#6B6B6B]" />
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <Divider />

            {/* FAQ */}
            <section>
              <SectionTitle>FAQ</SectionTitle>
              <Accordion
                defaultValue={["faq-1"]}
                className="border rounded-lg divide-y divide-[#E5E5E5] overflow-hidden"
              >
                {faqItems.map((item) => (
                  <AccordionItem
                    key={item.id}
                    value={item.id}
                    className="px-4 border-0"
                  >
                    <AccordionTrigger className="text-sm font-medium text-[#1A1A1A] py-4 hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-[#6B6B6B] pb-4">{item.a}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

          </div>
        </div>
      ) : (
        <ComingSoonBlock gym={selectedGym} />
      )}
    </>
  );
}
