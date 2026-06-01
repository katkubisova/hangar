import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Article } from "@/lib/types";

type ArticleCardProps = {
  article: Article;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href="/news/first-article" className="group block">
      <Card className="gap-0 p-0 h-full transition-shadow group-hover:shadow-md">
        {/* 16:9 image placeholder */}
        <div className="relative aspect-video bg-[#D9D9D9]">
          <span className="absolute top-2 left-2 text-xs text-[#6B6B6B]">
            Article image
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2.5 p-4 flex-1">
          <Badge
            variant="outline"
            className="w-fit border-[#6B6B6B] text-[#6B6B6B] text-[11px]"
          >
            {article.category}
          </Badge>

          <h3 className="font-semibold text-sm text-[#1A1A1A] leading-snug line-clamp-2">
            {article.title}
          </h3>

          <p className="text-xs text-[#6B6B6B] line-clamp-1">
            {article.subtitle}
          </p>

          <p className="text-xs text-[#6B6B6B]">
            {article.publishedDate} · {article.readTime} min read
          </p>

          {/* Author */}
          <div className="flex items-center gap-2 mt-auto pt-1">
            <div className="h-6 w-6 flex-shrink-0 rounded-full bg-[#D9D9D9]" />
            <span className="text-xs text-[#6B6B6B]">{article.author.name}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
