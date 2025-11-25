"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Code2, Eye } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface ComponentPreviewProps {
  title?: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
  code?: string;
}

export function ComponentPreview({ title, description, className, children, code }: ComponentPreviewProps) {
  const [view, setView] = React.useState<"preview" | "code">("preview");

  return (
    <div className="overflow-hidden rounded-lg border border-default bg-[var(--color-background-section)] shadow-sm">
      <div className="flex items-start justify-between border-b border-default bg-[var(--color-background-subsection)] px-4 py-3">
        <div className="flex flex-col gap-1">
          {title && <h3 className="text-body-sm text-default weight-medium">{title}</h3>}
          {description && <p className="text-body-xs text-alternative">{description}</p>}
        </div>
        {code && (
          <div className="flex items-center rounded-md border border-default bg-[var(--color-background-default)] p-0.5">
            <button
              onClick={() => setView("preview")}
              className={cn(
                "flex items-center justify-center rounded-sm px-2.5 py-1.5 transition-colors",
                view === "preview"
                  ? "bg-[var(--color-background-section)] text-default shadow-sm"
                  : "text-alternative hover:text-default"
              )}
              title="Preview"
            >
              <Eye className="h-4 w-4" />
            </button>
            <button
              onClick={() => setView("code")}
              className={cn(
                "flex items-center justify-center rounded-sm px-2.5 py-1.5 transition-colors",
                view === "code"
                  ? "bg-[var(--color-background-section)] text-default shadow-sm"
                  : "text-alternative hover:text-default"
              )}
              title="Code"
            >
              <Code2 className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
      {view === "preview" ? (
        <div className={cn("flex min-h-[120px] flex-col items-center justify-center gap-4 p-6", className)}>
          {children}
        </div>
      ) : (
        <div className="overflow-x-auto bg-[#1e1e1e]">
          <SyntaxHighlighter
            language="tsx"
            style={vscDarkPlus}
            customStyle={{
              margin: 0,
              padding: "1rem",
              background: "transparent",
              fontSize: "13px",
              fontFamily: "var(--font-mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace)",
            }}
            wrapLongLines={true}
          >
            {code || ""}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
}
