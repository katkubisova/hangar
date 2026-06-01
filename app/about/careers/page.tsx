import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BenefitCard } from "@/components/about/BenefitCard";
import { positions } from "@/lib/data/positions";

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

const benefits = [
  {
    title: "Great Community",
    text: "Join a team of passionate climbers and sports enthusiasts who support each other on and off the wall.",
  },
  {
    title: "Modern Facilities",
    text: "Work in world-class gyms with fresh equipment, updated walls, and a professional environment.",
  },
  {
    title: "Flexible Hours",
    text: "We offer flexible scheduling to help you balance work, training, and life outside the gym.",
  },
  {
    title: "Room to Grow",
    text: "We invest in our people. From coaching certifications to leadership development, we grow together.",
  },
];

const openPositions = positions.filter((p) => p.status === "open");

export default function CareersPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-[300px] bg-[#D9D9D9]">
        <span className="absolute top-4 left-6 text-xs text-[#6B6B6B]">
          Hero image
        </span>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-4xl font-bold text-[#1A1A1A] mb-3">
            Work with Us
          </h1>
          <p className="text-sm text-[#6B6B6B] mb-1">
            Placeholder subtext lorem ipsum dolor sit amet consectetur adipiscing.
          </p>
          <p className="text-sm text-[#6B6B6B]">
            Second line sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>
      </section>

      {/* ── Why join Hangar? ── */}
      <section className="py-20 bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-10">
            Why join Hangar?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <BenefitCard key={b.title} title={b.title} text={b.text} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Open positions ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-10">
            Open positions
          </h2>

          <div className="border border-[#E5E5E5] rounded-lg overflow-hidden">
            {openPositions.map((position) => (
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

          {/* TODO: No open positions state — show when openPositions.length === 0 */}
        </div>
      </section>
    </>
  );
}
