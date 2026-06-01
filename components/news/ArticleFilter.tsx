"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categories = ["All", "Community", "Events", "Climbing Tips", "Gym Updates"];

export function ArticleFilter() {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-[#6B6B6B]">Category</span>
      <Select defaultValue="All">
        <SelectTrigger className="w-44">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {categories.map((cat) => (
            <SelectItem key={cat} value={cat}>
              {cat}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
