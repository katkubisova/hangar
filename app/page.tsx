import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GymCard } from "@/components/home/GymCard";
import { gyms } from "@/lib/data/gyms";

const LOREM_SHORT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const LOREM_LONG =
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

const articleTeasers = [
  {
    id: 1,
    category: "News",
    title: "Placeholder Article Title Lorem Ipsum Dolor Sit",
    date: "1 June 2026",
    author: "Jan Novák",
  },
  {
    id: 2,
    category: "Community",
    title: "Another Article Headline Consectetur Adipiscing",
    date: "24 May 2026",
    author: "Eva Horáčková",
  },
  {
    id: 3,
    category: "Events",
    title: "Third Placeholder Title Sed Do Eiusmod Tempor",
    date: "18 May 2026",
    author: "Tomáš Krejčí",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-[500px] bg-[#D9D9D9]">
        <span className="absolute top-4 left-6 text-xs text-[#6B6B6B]">
          Hero image
        </span>
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="text-center max-w-2xl">
            <h1 className="text-4xl font-bold text-[#1A1A1A] mb-4 leading-tight">
              The Climbing Gym Network of the Czech Republic
            </h1>
            <p className="text-[#6B6B6B] mb-1">
              Placeholder subtext lorem ipsum dolor sit amet consectetur adipiscing.
            </p>
            <p className="text-[#6B6B6B] mb-8">
              Second line sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
            <a
              href="#locations"
              className={buttonVariants({ size: "lg" })}
            >
              Find your gym
            </a>
          </div>
        </div>
      </section>

      {/* ── About Hangar ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-10">
            About Hangar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-5 text-sm text-[#6B6B6B] leading-relaxed">
              <p>{LOREM_LONG}</p>
              <p>{LOREM_SHORT} Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>{LOREM_LONG} Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
            </div>
            <div className="relative h-80 bg-[#D9D9D9] rounded-lg">
              <span className="absolute top-3 left-3 text-xs text-[#6B6B6B]">
                Gym photo
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Locations ── */}
      <section id="locations" className="py-20 bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-10">
            Find your Hangar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gyms.map((gym) => (
              <GymCard key={gym.id} gym={gym} />
            ))}
          </div>
        </div>
      </section>

      {/* ── App Teaser ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">
              Hangar App — Coming soon
            </h2>
            <p className="text-sm text-[#6B6B6B] mb-8">
              {LOREM_SHORT}
            </p>
            <div className="flex justify-center gap-4">
              <div className="w-36 h-12 bg-[#D9D9D9] rounded flex items-center justify-center text-xs text-[#6B6B6B]">
                App Store
              </div>
              <div className="w-36 h-12 bg-[#D9D9D9] rounded flex items-center justify-center text-xs text-[#6B6B6B]">
                Google Play
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Visit Us Teaser ── */}
      <section className="py-20 bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 bg-[#D9D9D9] rounded-lg">
              <span className="absolute top-3 left-3 text-xs text-[#6B6B6B]">
                Gym photo
              </span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                Visit Us
              </h2>
              <p className="text-sm text-[#6B6B6B] mb-2">
                Placeholder text line one lorem ipsum dolor sit amet.
              </p>
              <p className="text-sm text-[#6B6B6B] mb-8">
                Second line consectetur adipiscing elit sed do eiusmod.
              </p>
              <Link href="/visit" className={buttonVariants()}>
                Plan your visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── News Teaser ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-[#1A1A1A]">News</h2>
            <Link
              href="/news"
              className={buttonVariants({ variant: "outline" })}
            >
              All news
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articleTeasers.map((article) => (
              <Card key={article.id} className="gap-0 p-0">
                <div className="relative h-44 bg-[#D9D9D9]">
                  <span className="absolute top-2 left-2 text-xs text-[#6B6B6B]">
                    Article image
                  </span>
                </div>
                <div className="flex flex-col gap-2 p-4">
                  <Badge
                    variant="outline"
                    className="w-fit border-[#6B6B6B] text-[#6B6B6B]"
                  >
                    {article.category}
                  </Badge>
                  <p className="font-semibold text-sm text-[#1A1A1A] leading-snug">
                    {article.title}
                  </p>
                  <p className="text-xs text-[#6B6B6B]">
                    {article.date} · {article.author}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
