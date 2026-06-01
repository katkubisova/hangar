import { Card } from "@/components/ui/card";
import type { ActivityCategory } from "@/lib/types";

type ActivityCardProps = {
  category: ActivityCategory;
};

export function ActivityCard({ category }: ActivityCardProps) {
  return (
    <Card className="gap-0 p-5">
      {/* Icon placeholder */}
      <div className="h-12 w-12 rounded bg-[#D9D9D9] flex items-center justify-center mb-4">
        <span className="text-[10px] text-[#6B6B6B]">Icon</span>
      </div>

      <h3 className="font-semibold text-sm text-[#1A1A1A] mb-2">
        {category.name}
      </h3>
      <p className="text-sm text-[#6B6B6B] leading-relaxed">
        {category.description}
      </p>
    </Card>
  );
}
