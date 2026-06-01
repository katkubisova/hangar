"use client";

import { useState } from "react";
import { GymSelector } from "@/components/shared/GymSelector";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { buttonVariants } from "@/components/ui/button";
import { gyms } from "@/lib/data/gyms";
import type { Gym } from "@/lib/types";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-bold text-[#1A1A1A] mb-6">{children}</h2>
  );
}

function Divider() {
  return <div className="border-t border-[#E5E5E5]" />;
}

export default function ContactPage() {
  const [selectedGym, setSelectedGym] = useState<Gym>(gyms[0]);
  const [submitted, setSubmitted] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);

  const isOpen = selectedGym.status === "open";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-[300px] bg-[#D9D9D9]">
        <span className="absolute top-4 left-6 text-xs text-[#6B6B6B]">
          Hero image
        </span>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-4xl font-bold text-[#1A1A1A] mb-3">Contact</h1>
          <p className="text-sm text-[#6B6B6B]">
            Placeholder subtext lorem ipsum dolor sit amet consectetur adipiscing.
          </p>
        </div>
      </section>

      {/* ── Sticky GymSelector ── */}
      <div className="sticky top-16 z-40 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <GymSelector
            gyms={gyms}
            selected={selectedGym}
            onChange={setSelectedGym}
          />
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-14">

        {isOpen ? (
          <>
            {/* Where to find us */}
            <section>
              <SectionTitle>Where to find us</SectionTitle>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {/* Map placeholder */}
                <div className="relative h-64 bg-[#D9D9D9] rounded-lg">
                  <span className="absolute top-3 left-3 text-xs text-[#6B6B6B]">
                    Map
                  </span>
                </div>
                {/* Gym info */}
                <div className="space-y-5">
                  <div>
                    <p className="font-semibold text-[#1A1A1A]">
                      Hangar {selectedGym.name}
                    </p>
                    <p className="text-sm text-[#6B6B6B] mt-1">
                      {selectedGym.address}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider mb-3">
                      Opening Hours
                    </p>
                    <table className="text-sm w-full">
                      <tbody>
                        {selectedGym.openingHours.map((oh) => (
                          <tr
                            key={oh.label}
                            className="border-b border-[#F2F2F2] last:border-0"
                          >
                            <td className="py-2 font-medium text-[#1A1A1A] w-1/2">
                              {oh.label}
                            </td>
                            <td className="py-2 text-[#6B6B6B]">
                              {oh.open}–{oh.close}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            <Divider />

            {/* How to get here */}
            <section>
              <SectionTitle>How to get here</SectionTitle>
              <div className="max-w-2xl space-y-2 mb-8 text-sm text-[#6B6B6B]">
                <p>
                  Placeholder directions line one lorem ipsum dolor sit amet consectetur.
                </p>
                <p>
                  Second line sed do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
                <p>
                  Third line adipiscing elit excepteur sint occaecat cupidatat non proident.
                </p>
              </div>
              {/* 16:9 video placeholder */}
              <div className="relative w-full max-w-2xl aspect-video bg-[#D9D9D9] rounded-lg">
                <span className="absolute top-3 left-3 text-xs text-[#6B6B6B]">
                  Video placeholder
                </span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs text-[#6B6B6B]">16:9</span>
                </div>
              </div>
            </section>

            <Divider />

            {/* Company info */}
            <section className="max-w-sm">
              <SectionTitle>Company info</SectionTitle>
              <div className="text-sm space-y-1">
                <p className="font-medium text-[#1A1A1A]">
                  {selectedGym.companyName}
                </p>
                <p className="text-[#6B6B6B]">IČO: {selectedGym.companyId}</p>
                <p className="text-[#6B6B6B]">DIČ: {selectedGym.taxId}</p>
                <p className="text-[#6B6B6B] pt-2">{selectedGym.address}</p>
              </div>
            </section>

            <Divider />

            {/* Quick contacts */}
            <section className="max-w-sm">
              <SectionTitle>Quick contacts</SectionTitle>
              <div className="text-sm space-y-2">
                <div>
                  <span className="text-[#6B6B6B]">Email </span>
                  <a
                    href={`mailto:${selectedGym.email}`}
                    className="text-[#1A1A1A] hover:underline"
                  >
                    {selectedGym.email}
                  </a>
                </div>
                {selectedGym.phone && (
                  <div>
                    <span className="text-[#6B6B6B]">Phone </span>
                    <a
                      href={`tel:${selectedGym.phone}`}
                      className="text-[#1A1A1A] hover:underline"
                    >
                      {selectedGym.phone}
                    </a>
                  </div>
                )}
              </div>
            </section>
          </>
        ) : (
          <section className="max-w-sm">
            <SectionTitle>Location details</SectionTitle>
            <p className="text-sm text-[#6B6B6B] mb-4">
              Hangar {selectedGym.name} is coming soon. Directions and full
              details will be added when this gym opens.
            </p>
            <div className="text-sm">
              <span className="text-[#6B6B6B]">Enquiries </span>
              <a
                href={`mailto:${selectedGym.email}`}
                className="text-[#1A1A1A] hover:underline"
              >
                {selectedGym.email}
              </a>
            </div>
          </section>
        )}

        <Divider />

        {/* ── Contact form ── */}
        <section className="max-w-lg">
          <SectionTitle>Get in touch</SectionTitle>

          {submitted && (
            <div className="mb-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
              Thank you — your message has been sent. We&apos;ll get back to
              you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#1A1A1A]">
                  Name *
                </label>
                <Input placeholder="Your name" required />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#1A1A1A]">
                  Email *
                </label>
                <Input type="email" placeholder="your@email.com" required />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-[#1A1A1A]">
                Phone
              </label>
              <Input type="tel" placeholder="+420 xxx xxx xxx" />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-[#1A1A1A]">
                Message *
              </label>
              <Textarea placeholder="Your message..." rows={5} required />
            </div>

            <div className="flex items-start gap-3">
              <Checkbox
                id="privacy"
                checked={privacyChecked}
                onCheckedChange={(checked) =>
                  setPrivacyChecked(Boolean(checked))
                }
                className="mt-0.5"
              />
              <label
                htmlFor="privacy"
                className="text-xs text-[#6B6B6B] leading-relaxed cursor-pointer"
              >
                I agree to the processing of my personal data in accordance
                with the{" "}
                <a href="/privacy-policy" className="text-[#1A1A1A] underline">
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            <button
              type="submit"
              disabled={!privacyChecked}
              className={buttonVariants()}
            >
              Send message
            </button>
          </form>
        </section>
      </div>
    </>
  );
}
