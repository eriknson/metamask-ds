"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { primitives, metamaskComponents } from "@/config/components";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const NavItem = ({ href, children, active }: { href: string; children: React.ReactNode; active: boolean }) => (
    <Link
      href={href}
      onClick={() => setIsOpen(false)}
      className={cn(
        "block -ml-4 rounded-md pl-4 pr-4 py-2 text-sm weight-medium transition-colors",
        active
          ? "bg-[var(--color-background-subsection)] text-default"
          : "text-alternative hover:bg-[var(--color-background-subsection)] hover:text-default"
      )}
    >
      {children}
    </Link>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="fixed left-4 top-4 z-50 rounded-md border border-default bg-[var(--color-background-subsection)] p-2 text-default lg:hidden"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar Container */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 transform border-r border-default bg-[var(--color-background-section)] transition-transform duration-200 ease-in-out lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="h-full overflow-y-auto p-6">
          <div className="mb-8">
            <h1 className="flex items-center gap-2 text-heading-md weight-semibold text-default">
              <Image
                src="/MetaMask-logo-black.svg"
                alt="MetaMask"
                width={140}
                height={28}
                className="logo-brand h-9 w-auto"
              />
            </h1>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-body-xs font-bold uppercase tracking-[0.16em] text-muted">
                Our Components
              </h3>
              <nav className="space-y-1">
                {metamaskComponents.map((item) => (
                  <NavItem
                    key={item.slug}
                    href={`/components/${item.slug}`}
                    active={pathname === `/components/${item.slug}`}
                  >
                    {item.title}
                  </NavItem>
                ))}
              </nav>
            </div>

            <div>
              <h3 className="mb-2 text-body-xs font-bold uppercase tracking-[0.16em] text-muted">
                Core components
              </h3>
              <nav className="space-y-1">
                {primitives.map((item) => (
                  <NavItem
                    key={item.slug}
                    href={`/components/${item.slug}`}
                    active={pathname === `/components/${item.slug}`}
                  >
                    {item.title}
                  </NavItem>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-[color:rgba(19,20,22,0.72)] lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
