import { TeamMemberCard } from "@/components/about/TeamMemberCard";
import { teamMembers } from "@/lib/data/team";

export default function TeamPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-[300px] bg-[#D9D9D9]">
        <span className="absolute top-4 left-6 text-xs text-[#6B6B6B]">
          Hero image
        </span>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-4xl font-bold text-[#1A1A1A] mb-3">Our Team</h1>
          <p className="text-sm text-[#6B6B6B] mb-1">
            Placeholder subtext lorem ipsum dolor sit amet consectetur adipiscing.
          </p>
          <p className="text-sm text-[#6B6B6B]">
            Second line sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>
      </section>

      {/* ── Team grid ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
