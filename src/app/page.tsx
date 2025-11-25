import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

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

        <p className="mt-3 max-w-sm text-body-md text-alternative text-balance">
          Component library and design reference for building MetaMask interfaces.
        </p>

        <Link 
          href="/components/button"
          className="group mt-8 inline-flex items-center justify-center gap-3 h-14 px-8 w-full sm:w-auto text-body-md weight-semibold bg-white !text-black rounded-full hover:bg-gray-100 active:scale-[0.98] transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          Explore Components
          <ArrowRight size={20} className="transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
