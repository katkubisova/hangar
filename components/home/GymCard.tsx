import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import type { Gym } from "@/lib/types";

type GymCardProps = {
  gym: Gym;
};

export function GymCard({ gym }: GymCardProps) {
  const firstHours = gym.openingHours[0];
  const hoursDisplay = firstHours
    ? `${firstHours.label}: ${firstHours.open}–${firstHours.close}`
    : "Opening hours TBA";

  return (
    <Card className="gap-0 p-0">
      {/* Image placeholder */}
      <div className="relative h-44 bg-[#D9D9D9]">
        <span className="absolute top-2 left-2 text-xs text-[#6B6B6B]">
          Gym photo
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="font-semibold text-sm text-[#1A1A1A]">{gym.name}</p>
            <p className="text-xs text-[#6B6B6B]">{gym.city}</p>
          </div>
          {gym.status === "open" ? (
            <Badge>Open</Badge>
          ) : (
            <Badge variant="outline" className="border-[#6B6B6B] text-[#6B6B6B]">
              Coming soon
            </Badge>
          )}
        </div>

        <div className="text-sm text-[#6B6B6B] space-y-1">
          <p>Placeholder gym description line one lorem ipsum.</p>
          <p>Second line of placeholder description text.</p>
        </div>

        <p className="text-xs text-[#6B6B6B]">{hoursDisplay}</p>

        <div className="pt-1">
          <Link
            href={`/visit?gym=${gym.slug}`}
            className={buttonVariants({ variant: "outline", size: "sm" })}
          >
            Visit
          </Link>
        </div>
      </div>
    </Card>
  );
}
