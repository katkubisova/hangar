const steps = [
  "Pick up a challenge card at reception or download it from the board in the gym.",
  "Complete the routes at your own pace — no time limit, no registration required.",
  "Log your sends and track your progress on the challenge board.",
  "Finish the challenge and get your reward at reception.",
];

export default function HangarChallengePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[300px] bg-[#D9D9D9]">
        <span className="absolute top-4 left-6 text-xs text-[#6B6B6B]">
          Hero image
        </span>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-4xl font-bold text-[#1A1A1A] mb-3">
            Hangar Challenge
          </h1>
          <p className="text-sm text-[#6B6B6B]">
            A year-round challenge for climbers of all levels.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">

        {/* What is the Hangar Challenge */}
        <section className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">
                What is the Hangar Challenge?
              </h2>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">
                The Hangar Challenge is our ongoing climbing programme running across all Hangar gyms throughout the year. Set your own goals, track your progress, and push your limits — whether you&apos;re a first-timer or a seasoned boulderer. Each gym displays the active challenge routes on a dedicated board.
              </p>
            </div>
            <div className="relative h-72 rounded-lg bg-[#D9D9D9]">
              <span className="absolute top-3 left-3 text-xs text-[#6B6B6B]">
                Climbing image
              </span>
            </div>
          </div>
        </section>

        <div className="border-t border-[#E5E5E5]" />

        {/* How it works */}
        <section className="py-20 max-w-2xl">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-10">How it works</h2>
          <ol className="space-y-8">
            {steps.map((step, i) => (
              <li key={i} className="flex gap-5 items-start">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#1A1A1A] text-sm font-bold text-white">
                  {i + 1}
                </span>
                <p className="text-sm text-[#6B6B6B] leading-relaxed pt-1">{step}</p>
              </li>
            ))}
          </ol>
        </section>

      </div>
    </>
  );
}
