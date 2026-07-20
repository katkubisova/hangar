import Link from "next/link";
import { ActivityCard } from "@/components/events/ActivityCard";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { gyms } from "@/lib/data/gyms";
import { activityCategories } from "@/lib/data/activity-categories";

const visibleGyms = gyms.filter((g) => g.status !== "hidden");

export default function EventsPage() {
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

      {/* ── Book Activities ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-10">
            Book activities in
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {visibleGyms.map((gym) => {
              const isOpen = gym.status === "open";
              return (
                <div
                  key={gym.slug}
                  className="flex flex-col gap-4 rounded-lg border border-[#E5E5E5] p-6"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-[#1A1A1A]">
                      Hangar {gym.name}
                    </p>
                    {!isOpen && (
                      <Badge
                        variant="outline"
                        className="border-[#6B6B6B] text-[#6B6B6B] text-[10px]"
                      >
                        Coming soon
                      </Badge>
                    )}
                  </div>
                  {isOpen ? (
                    <a
                      href={gym.activitiesBookingUrl}
                      className={buttonVariants({ variant: "outline", size: "sm" })}
                    >
                      Book activities
                    </a>
                  ) : (
                    <span className="text-xs text-[#6B6B6B]">
                      Activities not yet available at this location.
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Activity Categories ── */}
      <section className="py-20 bg-[#F2F2F2]">
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

      {/* ── Hangar Challenge ── */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-white mb-4">Hangar Challenge</h2>
            <p className="text-sm text-[#A0A0A0] leading-relaxed mb-8">
              Our year-round bouldering challenge. Set goals, track progress, and push your limits at any pace.
            </p>
            <Link href="/hangar-challenge" className={buttonVariants({ variant: "outline" })}>
              How it works
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
