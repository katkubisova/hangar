import { Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { TeamMember } from "@/lib/types";

const gymCityMap: Record<string, string> = {
  brno: "Brno",
  ostrava: "Ostrava",
  praha: "Praha",
  plzen: "Plzeň",
  olomouc: "Olomouc",
};

type TeamMemberCardProps = {
  member: TeamMember;
};

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  const city = gymCityMap[member.gymSlug] ?? member.gymSlug;

  return (
    <Card className="flex flex-col items-center gap-0 p-6 text-center">
      {/* Avatar */}
      <div className="h-24 w-24 flex-shrink-0 rounded-full bg-[#D9D9D9] mb-4" />

      {/* Name + position */}
      <p className="font-semibold text-sm text-[#1A1A1A]">{member.name}</p>
      <p className="text-xs text-[#6B6B6B] mt-0.5 mb-3">{member.position}</p>

      {/* Gym badge */}
      <Badge
        variant="outline"
        className="mb-4 border-[#6B6B6B] text-[#6B6B6B] text-[11px]"
      >
        {city}
      </Badge>

      {/* Bio */}
      <p className="text-xs text-[#6B6B6B] leading-relaxed text-left">
        {member.bio}
      </p>

      {/* Email (optional) */}
      {member.email && (
        <a
          href={`mailto:${member.email}`}
          className="mt-4 flex items-center gap-1.5 text-xs text-[#1A1A1A] hover:underline self-start"
        >
          <Mail size={13} />
          Email
        </a>
      )}
    </Card>
  );
}
