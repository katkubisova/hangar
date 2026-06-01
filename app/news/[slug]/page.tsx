export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <main className="flex min-h-[60vh] items-center justify-center">
      <p className="text-[#6B6B6B] text-sm">
        News article: <span className="text-[#1A1A1A]">{slug}</span> — Page coming soon
      </p>
    </main>
  );
}
