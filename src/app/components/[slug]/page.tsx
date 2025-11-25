import { notFound } from "next/navigation";
import { primitives, metamaskComponents } from "@/config/components";
import { ExamplesRegistry } from "@/components/examples/registry";

// Combine all components
const allComponents = [...primitives, ...metamaskComponents];

export function generateStaticParams() {
  return allComponents.map((c) => ({
    slug: c.slug,
  }));
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const component = allComponents.find((c) => c.slug === slug);

  if (!component) {
    notFound();
  }

  const DemoComponent = ExamplesRegistry[slug];

  return (
    <div className="animate-in fade-in space-y-8 pb-20 duration-500">
      <header className="space-y-2">
        <h1 className="text-display-md weight-semibold text-default tracking-tight">
          {component.title}
        </h1>
        <p className="text-alternative">{component.description}</p>
      </header>

      <hr className="border-default" />

      <section className="space-y-6">
        {DemoComponent ? (
          <DemoComponent />
        ) : (
          <div className="surface-section text-muted border-default rounded-lg border border-dashed p-8 text-center">
            Example content for {component.title} coming soon.
          </div>
        )}
      </section>
    </div>
  );
}
