import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-8xl font-bold text-[#D9D9D9] leading-none mb-6">404</p>
      <h1 className="text-2xl font-bold text-[#1A1A1A] mb-3">Page not found</h1>
      <p className="text-sm text-[#6B6B6B] mb-8 max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className={buttonVariants()}>
        Back to Home
      </Link>
    </div>
  );
}
