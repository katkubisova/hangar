import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ArticleCard } from "@/components/news/ArticleCard";
import { articles, featuredArticle } from "@/lib/data/articles";
import { Share2, X, Link2, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

const LOREM_LONG =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const LOREM_SHORT =
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.";

const socialActions = [
  { label: "Facebook", icon: Share2 },
  { label: "X", icon: X },
  { label: "LinkedIn", icon: Link2 },
  { label: "Copy link", icon: Copy },
];

const relatedArticles = articles.slice(1, 4);

export default function ArticleDetailPage() {
  const article = featuredArticle;

  return (
    <>
      {/* ── Article header (constrained) ── */}
      <div className="max-w-3xl mx-auto px-6 pt-16 pb-8">
        <Badge
          variant="outline"
          className="mb-4 border-[#6B6B6B] text-[#6B6B6B]"
        >
          {article.category}
        </Badge>

        <h1 className="text-4xl font-bold text-[#1A1A1A] leading-tight mb-4">
          New gym opening in Praha — what to expect from Hangar&apos;s third
          location in Holešovice
        </h1>

        <p className="text-lg text-[#6B6B6B] mb-5">
          Our third location is taking shape in Praha&apos;s Holešovice
          district — here&apos;s everything you need to know before we open.
        </p>

        <div className="flex items-center gap-3 text-sm text-[#6B6B6B]">
          <span>{article.publishedDate}</span>
          <span>·</span>
          <span>{article.readTime} min read</span>
        </div>
      </div>

      {/* ── Full-width hero image ── */}
      <div className="relative h-[400px] w-full bg-[#D9D9D9]">
        <span className="absolute top-4 left-6 text-xs text-[#6B6B6B]">
          Hero image
        </span>
      </div>

      {/* ── Author row + social sharing ── */}
      <div className="max-w-3xl mx-auto px-6 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5E5E5]">
        {/* Author */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 flex-shrink-0 rounded-full bg-[#D9D9D9]" />
          <div>
            <p className="text-sm font-medium text-[#1A1A1A]">
              {article.author.name}
            </p>
            <p className="text-xs text-[#6B6B6B]">Head of Communications</p>
          </div>
        </div>

        {/* Social sharing */}
        <div className="flex items-center gap-2">
          {socialActions.map(({ label, icon: Icon }) => (
            <button
              key={label}
              aria-label={label}
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" }),
                "h-8 w-8"
              )}
            >
              <Icon size={15} />
            </button>
          ))}
        </div>
      </div>

      {/* ── Article body ── */}
      <article className="max-w-[720px] mx-auto px-6 py-12 space-y-6">
        <h2 className="text-xl font-bold text-[#1A1A1A]">
          Why Praha, and why now?
        </h2>

        <p className="text-sm text-[#6B6B6B] leading-relaxed">{LOREM_LONG}</p>

        <p className="text-sm text-[#6B6B6B] leading-relaxed">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <p className="text-sm text-[#6B6B6B] leading-relaxed">{LOREM_SHORT}</p>

        {/* In-article image */}
        <div className="relative h-64 rounded-lg bg-[#D9D9D9]">
          <span className="absolute top-3 left-3 text-xs text-[#6B6B6B]">
            Article image
          </span>
        </div>
        <p className="text-xs text-[#6B6B6B] text-center -mt-3">
          Image caption placeholder — interior render of Hangar Praha
        </p>

        {/* Blockquote */}
        <blockquote className="border-l-4 border-[#1A1A1A] pl-5 py-1">
          <p className="text-base italic text-[#1A1A1A] leading-relaxed">
            &ldquo;Climbing should be accessible to everyone. Hangar Praha is
            our biggest step yet toward making that a reality across the whole
            country.&rdquo;
          </p>
        </blockquote>

        <h2 className="text-xl font-bold text-[#1A1A1A]">
          What to expect at opening
        </h2>

        <p className="text-sm text-[#6B6B6B] leading-relaxed">{LOREM_LONG}</p>

        <p className="text-sm text-[#6B6B6B] leading-relaxed">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </article>

      {/* ── Related articles ── */}
      <section className="bg-[#F2F2F2] py-16 mt-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-[#1A1A1A]">
              Related articles
            </h2>
            <Link
              href="/news"
              className={buttonVariants({ variant: "outline" })}
            >
              All news
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedArticles.map((a, i) => (
              <ArticleCard key={i} article={a} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
