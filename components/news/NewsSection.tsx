"use client";

import { useState } from "react";
import { ArticleFilter } from "@/components/news/ArticleFilter";
import { ArticleCard } from "@/components/news/ArticleCard";
import type { Article } from "@/lib/types";

type NewsSectionProps = {
  articles: Article[];
};

export function NewsSection({ articles }: NewsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const showEmpty = selectedCategory !== "All";

  function handleCategoryChange(value: string | null) {
    setSelectedCategory(value ?? "All");
  }

  return (
    <>
      <div className="mb-10">
        <ArticleFilter value={selectedCategory} onValueChange={handleCategoryChange} />
      </div>

      {showEmpty ? (
        <div className="py-20 flex flex-col items-center text-center gap-4">
          <p className="text-sm text-[#6B6B6B]">No articles found in this category.</p>
          <button
            onClick={() => setSelectedCategory("All")}
            className="text-sm text-[#1A1A1A] underline underline-offset-2 hover:opacity-70"
          >
            Reset filter
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <ArticleCard key={i} article={article} />
          ))}
        </div>
      )}
    </>
  );
}
