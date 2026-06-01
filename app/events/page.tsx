"use client";

import { useState } from "react";
import { GymSelector } from "@/components/shared/GymSelector";
import { ActivityCard } from "@/components/events/ActivityCard";
import { buttonVariants } from "@/components/ui/button";
import { gyms } from "@/lib/data/gyms";
import { activityCategories } from "@/lib/data/activity-categories";
import type { Gym } from "@/lib/types";

export default function EventsPage() {
  const [selectedGym, setSelectedGym] = useState<Gym>(gyms[0]);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-[300px] bg-[#D9D9D9]">
        <span className="absolute top-4 left-6 text-xs text-[#6B6B6B]">
          Hero image
        </span>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-4xl font-bold text-[#1A1A1A] mb-3">
            Events &amp; Activities
          </h1>
          <p className="text-sm text-[#6B6B6B]">
            Placeholder subtext lorem ipsum dolor sit amet consectetur adipiscing.
          </p>
        </div>
      </section>

      {/* ── Activity Categories ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-10">
            What&apos;s on at Hangar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activityCategories.map((category) => (
              <ActivityCard key={category.name} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Book Now ── */}
      <section className="py-20 bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8">
            Ready to book?
          </h2>
          <GymSelector
            gyms={gyms}
            selected={selectedGym}
            onChange={setSelectedGym}
          />
          <div className="mt-8 flex flex-col gap-3 items-start">
            <a href="#" className={buttonVariants({ size: "lg" })}>
              Browse activities at {selectedGym.name}
            </a>
            <p className="text-xs text-[#6B6B6B]">
              You&apos;ll be redirected to the Hangar booking platform.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
