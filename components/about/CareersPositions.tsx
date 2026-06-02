"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import type { Position } from "@/lib/types";

const gymCityMap: Record<string, string> = {
  brno: "Brno",
  ostrava: "Ostrava",
  praha: "Praha",
  plzen: "Plzeň",
  olomouc: "Olomouc",
};

const employmentLabels: Record<string, string> = {
  "full-time": "Full-time",
  "part-time": "Part-time",
  contract: "Contract",
};

type CareersPositionsProps = {
  positions: Position[];
};

export function CareersPositions({ positions }: CareersPositionsProps) {
  const [forceEmpty, setForceEmpty] = useState(false);

  const isEmpty = forceEmpty || positions.length === 0;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-10 gap-4 flex-wrap">
          <h2 className="text-2xl font-bold text-[#1A1A1A]">Open positions</h2>
          <label className="flex items-center gap-2 text-xs text-[#6B6B6B] border border-dashed border-[#D9D9D9] rounded px-3 py-1.5 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={forceEmpty}
              onChange={(e) => setForceEmpty(e.target.checked)}
              className="accent-[#1A1A1A]"
            />
            Toggle empty state — prototype only
          </label>
        </div>

        {isEmpty ? (
          <div className="py-16 flex flex-col items-center text-center gap-5 border border-dashed border-[#E5E5E5] rounded-lg">
            <p className="text-sm text-[#6B6B6B] max-w-sm">
              No open positions right now — but we&apos;re always growing.
            </p>
            <Link href="/contact" className={buttonVariants({ variant: "outline" })}>
              Get in touch
            </Link>
          </div>
        ) : (
          <div className="border border-[#E5E5E5] rounded-lg overflow-hidden">
            {positions.map((position) => (
              <Link
                key={position.title}
                href="/about/careers/position-detail"
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 py-4 border-b border-[#E5E5E5] last:border-0 hover:bg-[#F2F2F2] transition-colors"
              >
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="font-medium text-sm text-[#1A1A1A]">
                    {position.title}
                  </span>
                  <Badge
                    variant="outline"
                    className="border-[#6B6B6B] text-[#6B6B6B] text-[11px]"
                  >
                    {gymCityMap[position.gymSlug] ?? position.gymSlug}
                  </Badge>
                  <Badge variant="secondary" className="text-[11px]">
                    {employmentLabels[position.employmentType]}
                  </Badge>
                </div>
                <span className="flex items-center gap-1 text-xs text-[#6B6B6B] flex-shrink-0">
                  View position
                  <ArrowRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
