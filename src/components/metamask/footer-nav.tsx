"use client";

import * as React from "react";
import { Home, TrendingUp, Plus, Clock, Gift } from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function FooterNav({ className, ...props }: FooterNavProps) {
  const [activeTab, setActiveTab] = React.useState("home");

  const tabs = [
    { id: "home", icon: Home, label: "Home" },
    { id: "trending", icon: TrendingUp, label: "Trending" },
    { id: "trade", icon: Plus, label: "Trade", isPrimary: true },
    { id: "activity", icon: Clock, label: "Activity" },
    { id: "rewards", icon: Gift, label: "Rewards" },
  ];

  return (
    <nav
      className={cn(
        "relative z-10 flex items-center justify-around bg-[var(--color-background-section)] pb-safe pt-3",
        className
      )}
      {...props}
    >
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        
        if (tab.isPrimary) {
          return (
            <button
              key={tab.id}
              onClick={() => {
                // Action button - doesn't change selection state
                console.log("Trade button tapped");
              }}
              className="group relative flex min-w-[60px] flex-col items-center justify-end gap-1"
              aria-label={tab.label}
            >
              <div className="absolute -top-10 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-primary-default text-primary-inverse shadow-[0_0_0_4px_var(--color-background-section)] transition-all duration-150 active:scale-90 active:shadow-[0_0_0_4px_var(--color-background-section),0_2px_8px_rgba(0,0,0,0.1)]">
                <Icon size={28} strokeWidth={2.5} />
              </div>
              {/* Spacer to maintain vertical alignment with other tabs */}
              <div className="h-5 w-5" /> 
              <span className="text-[10px] font-medium text-muted">
                {tab.label}
              </span>
            </button>
          );
        }

        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex min-w-[60px] flex-col items-center gap-1 p-2 transition-colors",
              isActive
                ? "text-white"
                : "text-muted hover:text-alternative"
            )}
            aria-pressed={isActive}
          >
            <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
            <span className="text-xs font-medium">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
