"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categories = [
  "All",
  "Community",
  "Events",
  "Climbing Tips",
  "Gym Updates",
  "Empty category",
];

type ArticleFilterProps = {
  value: string;
  onValueChange: (value: string | null) => void;
};

export function ArticleFilter({ value, onValueChange }: ArticleFilterProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-[#6B6B6B]">Category</span>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="w-48">
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
