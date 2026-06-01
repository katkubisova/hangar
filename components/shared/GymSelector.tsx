"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import type { Gym } from "@/lib/types";

type GymSelectorProps = {
  gyms: Gym[];
  selected: Gym;
  onChange: (gym: Gym) => void;
};

export function GymSelector({ gyms, selected, onChange }: GymSelectorProps) {
  return (
    <Tabs
      value={selected.slug}
      onValueChange={(slug) => {
        const gym = gyms.find((g) => g.slug === slug);
        if (gym) onChange(gym);
      }}
    >
      <TabsList className="h-auto gap-2 bg-transparent p-0">
        {gyms.map((gym) => {
          const isComingSoon = gym.status === "coming-soon";
          return (
            <TabsTrigger
              key={gym.slug}
              value={gym.slug}
              disabled={isComingSoon}
              className={cn(
                "flex h-auto flex-col items-center gap-0.5 rounded-full border-0 px-4 py-2 text-sm font-medium transition-colors",
                // Override shadcn Tabs active/inactive defaults
                "data-active:shadow-none",
                // Inactive open gym
                "bg-[#F2F2F2] text-[#1A1A1A] hover:bg-[#E5E5E5]",
                // Active
                "data-active:bg-[#1A1A1A] data-active:text-white hover:data-active:bg-[#1A1A1A]",
                // Coming soon — override disabled:opacity-50 with our own style
                isComingSoon && "cursor-not-allowed bg-[#F2F2F2] text-[#6B6B6B] opacity-100 hover:bg-[#F2F2F2] disabled:opacity-100"
              )}
            >
              <span>{gym.name}</span>
              {isComingSoon && (
                <span className="text-[10px] font-normal leading-none text-[#6B6B6B]">
                  Coming soon
                </span>
              )}
            </TabsTrigger>
          );
        })}
      </TabsList>
    </Tabs>
  );
}
