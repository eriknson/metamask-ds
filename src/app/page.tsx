import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="surface-default text-default relative flex min-h-screen flex-col items-center justify-center px-6 py-12">
      <div className="absolute right-6 top-6">
        <ThemeToggle />
      </div>

      <div className="flex flex-col items-center text-center">
        <Image
          src="/MetaMask-icon-fox-with-margins.svg"
          alt="MetaMask"
          width={120}
          height={120}
          priority
        />

        <h1 className="mt-6 text-heading-lg weight-semibold text-default">
          MetaMask DS
        </h1>

        <p className="mt-3 max-w-xs text-body-md text-alternative">
          A mobile-first design system for MetaMask components.
        </p>

        <Button asChild size="lg" className="mt-8">
          <Link href="/components/button">
            Explore Components
            <ArrowRight size={18} />
          </Link>
        </Button>
      </div>
    </div>
  );
}
