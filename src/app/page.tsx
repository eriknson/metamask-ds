import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="surface-default text-default relative flex min-h-screen flex-col items-center justify-center p-8">
      <div className="absolute right-8 top-8 text-body-sm text-muted">
        <ThemeToggle />
      </div>
      <div className="max-w-md space-y-6 text-center">
        <div className="surface-subsection text-default mx-auto flex h-16 w-16 items-center justify-center rounded-2xl text-heading-lg weight-semibold">
          DS
        </div>
        <h1 className="text-default">Baby MetaMask DS</h1>
        <p className="text-alternative">
          A minimal, mobile-first design system dashboard showcasing essential primitives
          and MetaMask-specific components.
        </p>
        <Button asChild size="lg" className="inline-flex w-full justify-center gap-2 md:w-auto">
          <Link href="/components/button">
            Explore Components <ArrowRight size={18} />
          </Link>
        </Button>
      </div>
    </div>
  );
}
