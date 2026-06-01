import { ArticleCard } from "@/components/news/ArticleCard";
import { ArticleFilter } from "@/components/news/ArticleFilter";
import { articles } from "@/lib/data/articles";

export default function NewsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-[300px] bg-[#D9D9D9]">
        <span className="absolute top-4 left-6 text-xs text-[#6B6B6B]">
          Hero image
        </span>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-4xl font-bold text-[#1A1A1A] mb-3">News</h1>
          <p className="text-sm text-[#6B6B6B]">
            Placeholder subtext lorem ipsum dolor sit amet consectetur adipiscing.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* ── Filter ── */}
        <div className="mb-10">
          <ArticleFilter />
        </div>

        {/* ── Article grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <ArticleCard key={i} article={article} />
          ))}
        </div>

        {/* TODO: Empty state — show when no articles match the selected category filter */}
      </div>
    </>
  );
}
