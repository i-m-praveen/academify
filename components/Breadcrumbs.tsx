import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export type BreadcrumbItem = { name: string; url: string };

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const allItems: BreadcrumbItem[] = [{ name: "Home", url: "/" }, ...items];

  return (
    <div className="border-b border-border bg-page">
      <JsonLd data={breadcrumbSchema(allItems)} />
      <Container>
        <nav aria-label="Breadcrumb" className="py-3">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-ink-muted">
            {allItems.map((item, index) => {
              const isLast = index === allItems.length - 1;
              return (
                <li key={item.url} className="flex items-center gap-1.5">
                  {index > 0 ? (
                    <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                  ) : null}
                  {isLast ? (
                    <span aria-current="page" className="font-medium text-ink">
                      {item.name}
                    </span>
                  ) : (
                    <Link href={item.url} className="hover:text-primary focus-ring rounded-xs">
                      {item.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </Container>
    </div>
  );
}
