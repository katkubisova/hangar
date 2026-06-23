"use client";

import { useState } from "react";
import { GymSelector } from "@/components/shared/GymSelector";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { buttonVariants } from "@/components/ui/button";
import { gyms } from "@/lib/data/gyms";
import type { Gym } from "@/lib/types";

const physioGyms = gyms.filter((g) => g.physio?.enabled);

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-bold text-[#1A1A1A] mb-6">{children}</h2>;
}

function Divider() {
  return <div className="border-t border-[#E5E5E5]" />;
}

function PhysioContent({ gym }: { gym: Gym }) {
  const [submitted, setSubmitted] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const physio = gym.physio!;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="max-w-2xl py-16 space-y-14">

      {/* Intro */}
      <section>
        <p className="text-sm text-[#6B6B6B]">{physio.intro}</p>
      </section>

      <Divider />

      {/* Team */}
      <section>
        <SectionTitle>Our Physiotherapists</SectionTitle>
        <div className="space-y-8">
          {physio.team.map((member) => (
            <div key={member.name} className="flex gap-5 items-start">
              <div className="relative h-20 w-20 flex-shrink-0 rounded-full bg-[#D9D9D9] flex items-center justify-center">
                <span className="text-[10px] text-[#6B6B6B]">Photo</span>
              </div>
              <div>
                <p className="font-semibold text-[#1A1A1A]">{member.name}</p>
                <p className="text-xs text-[#6B6B6B] mb-2">{member.specialisation}</p>
                <p className="text-sm text-[#6B6B6B]">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* Prices */}
      <section>
        <SectionTitle>Prices</SectionTitle>
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#F2F2F2]">
                <th className="px-4 py-3 text-left font-semibold text-[#1A1A1A]">Service</th>
                <th className="px-4 py-3 text-left font-semibold text-[#1A1A1A]">Duration</th>
                <th className="px-4 py-3 text-right font-semibold text-[#1A1A1A]">Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E5E5]">
              {physio.prices.map((row) => (
                <tr key={row.service}>
                  <td className="px-4 py-3 text-[#1A1A1A]">{row.service}</td>
                  <td className="px-4 py-3 text-[#6B6B6B]">{row.duration}</td>
                  <td className="px-4 py-3 text-right font-medium text-[#1A1A1A]">{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Divider />

      {/* Booking form */}
      <section>
        <SectionTitle>Book an Appointment</SectionTitle>

        {submitted ? (
          <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
            Your booking request has been sent. We&apos;ll be in touch shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#1A1A1A]">Name *</label>
                <Input placeholder="Your name" required />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#1A1A1A]">Email *</label>
                <Input type="email" placeholder="your@email.com" required />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-[#1A1A1A]">Phone *</label>
              <Input type="tel" placeholder="+420 xxx xxx xxx" required />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-[#1A1A1A]">
                Preferred date &amp; time *
              </label>
              <Input type="datetime-local" required />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-[#1A1A1A]">Note</label>
              <Textarea placeholder="Any additional information about your injury or session preference..." rows={4} />
            </div>

            <div className="flex items-start gap-3">
              <Checkbox
                id="physio-privacy"
                checked={privacyChecked}
                onCheckedChange={(checked) => setPrivacyChecked(Boolean(checked))}
                className="mt-0.5"
              />
              <label
                htmlFor="physio-privacy"
                className="text-xs text-[#6B6B6B] leading-relaxed cursor-pointer"
              >
                I agree to the processing of my personal data in accordance with the{" "}
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
              Send booking request
            </button>
          </form>
        )}
      </section>

    </div>
  );
}

export default function PhysioPage() {
  const [selectedGym, setSelectedGym] = useState<Gym>(physioGyms[0]);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[300px] bg-[#D9D9D9]">
        <span className="absolute top-4 left-6 text-xs text-[#6B6B6B]">
          Hero image
        </span>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-4xl font-bold text-[#1A1A1A] mb-3">Physio</h1>
          <p className="text-sm text-[#6B6B6B]">
            Professional physiotherapy for climbers — helping you recover faster and move better.
          </p>
        </div>
      </section>

      {/* Sticky gym selector */}
      <div className="sticky top-16 z-40 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <GymSelector gyms={physioGyms} selected={selectedGym} onChange={setSelectedGym} />
        </div>
      </div>

      {/* Per-gym content — key forces remount on gym change, resetting form state */}
      <div className="max-w-7xl mx-auto px-6">
        <PhysioContent key={selectedGym.slug} gym={selectedGym} />
      </div>
    </>
  );
}
