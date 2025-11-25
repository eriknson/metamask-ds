import { Sidebar } from "@/components/layout/Sidebar";

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="surface-default text-default min-h-screen">
      <Sidebar />
      <main className="lg:pl-64 min-h-screen transition-all duration-200">
        <div className="container mx-auto max-w-3xl p-6 pt-24 lg:p-12 lg:pt-12">
          {children}
        </div>
      </main>
    </div>
  );
}
