"use client";

import { useState } from "react";
import { GymSelector } from "@/components/shared/GymSelector";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { gyms } from "@/lib/data/gyms";
import type { Gym } from "@/lib/types";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const galleryItems = Array.from({ length: 8 }, (_, i) => i + 1);

function OfferSubsection({
  title,
  imageLabel,
}: {
  title: string;
  imageLabel: string;
}) {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-lg font-bold text-[#1A1A1A]">{title}</h3>
      <div className="space-y-2 text-sm text-[#6B6B6B]">
        <p>{LOREM}</p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
      </div>
      <div className="relative h-56 rounded-lg bg-[#D9D9D9]">
        <span className="absolute top-3 left-3 text-xs text-[#6B6B6B]">
          {imageLabel}
        </span>
      </div>
    </div>
  );
}

export default function CafePage() {
  const [selectedGym, setSelectedGym] = useState<Gym>(gyms[0]);
  const isOpen = selectedGym.status === "open";

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-[400px] bg-[#D9D9D9]">
        <span className="absolute top-4 left-6 text-xs text-[#6B6B6B]">
          Hero image
        </span>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-4xl font-bold text-[#1A1A1A] mb-4">
            Hangar Cafe
          </h1>
          <p className="text-sm text-[#6B6B6B] mb-1">
            Placeholder subtext lorem ipsum dolor sit amet consectetur
            adipiscing elit.
          </p>
          <p className="text-sm text-[#6B6B6B]">
            Second line sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>
      </section>

      {/* ── Our Offer ── */}
      <section className="bg-[#F2F2F2] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <OfferSubsection
              title="Specialty Coffee"
              imageLabel="Coffee photo"
            />
            <OfferSubsection
              title="Fresh Bistro"
              imageLabel="Food photo"
            />
          </div>
        </div>
      </section>

      {/* ── Menus ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-10">
            Our Menus
          </h2>
          <GymSelector
            gyms={gyms}
            selected={selectedGym}
            onChange={setSelectedGym}
          />

          <div className="mt-8">
            {isOpen ? (
              <Card className="gap-0 p-5 max-w-sm">
                <p className="font-semibold text-sm text-[#1A1A1A] mb-4">
                  Hangar {selectedGym.name}
                </p>
                <div className="flex items-center gap-5">
                  {/* Thumbnail */}
                  <div className="relative h-[80px] w-[120px] flex-shrink-0 rounded bg-[#D9D9D9]">
                    <span className="absolute top-1.5 left-2 text-[10px] text-[#6B6B6B]">
                      Menu thumbnail
                    </span>
                  </div>
                  <a href="#" className={buttonVariants({ variant: "outline", size: "sm" })}>
                    Download menu (PDF)
                  </a>
                </div>
              </Card>
            ) : (
              <p className="text-sm text-[#6B6B6B]">
                Hangar {selectedGym.name} is coming soon — menu not yet
                available.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="py-20 bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-10">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryItems.map((i) => (
              <div
                key={i}
                className="relative aspect-square rounded-lg bg-[#D9D9D9]"
              >
                <span className="absolute top-2 left-2 text-xs text-[#6B6B6B]">
                  Gallery image
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
