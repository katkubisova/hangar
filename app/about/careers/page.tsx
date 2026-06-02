import { BenefitCard } from "@/components/about/BenefitCard";
import { CareersPositions } from "@/components/about/CareersPositions";
import { positions } from "@/lib/data/positions";

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
      <CareersPositions positions={openPositions} />
    </>
  );
}
