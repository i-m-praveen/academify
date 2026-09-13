"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { LinkButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { primaryNav, solutionsNav } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          <Link
            href="/platform"
            className="text-sm font-medium text-ink hover:text-primary focus-ring rounded-xs"
          >
            Platform
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium text-ink hover:text-primary focus-ring rounded-xs"
              aria-expanded={solutionsOpen}
              aria-haspopup="true"
              onClick={() => setSolutionsOpen((v) => !v)}
            >
              Solutions
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </button>
            {solutionsOpen ? (
              <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3">
                <div className="rounded bg-white p-2 shadow-md border border-border">
                  {solutionsNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-sm p-3 hover:bg-primary-xlight focus-ring"
                    >
                      <p className="text-sm font-semibold text-ink">{item.label}</p>
                      <p className="mt-0.5 text-xs text-ink-muted">{item.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          {primaryNav
            .filter((item) => item.href !== "/platform")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-ink hover:text-primary focus-ring rounded-xs"
              >
                {item.label}
              </Link>
            ))}
        </nav>

        <div className="hidden lg:block">
          <LinkButton href="/contact" size="md">
            Request a Demo
          </LinkButton>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm p-2 text-ink focus-ring lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {mobileOpen ? (
        <div id="mobile-nav" className="border-t border-border bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            <Link href="/platform" className="rounded-sm px-3 py-3 text-base font-medium hover:bg-primary-xlight focus-ring">
              Platform
            </Link>
            <p className="px-3 pt-3 text-xs font-semibold uppercase tracking-wide text-ink-muted">
              Solutions
            </p>
            {solutionsNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-sm px-3 py-3 text-base font-medium hover:bg-primary-xlight focus-ring"
              >
                {item.label}
              </Link>
            ))}
            <div className="my-2 h-px bg-border" />
            {primaryNav
              .filter((item) => item.href !== "/platform")
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-sm px-3 py-3 text-base font-medium hover:bg-primary-xlight focus-ring"
                >
                  {item.label}
                </Link>
              ))}
            <LinkButton href="/contact" className="mt-3 justify-center">
              Request a Demo
            </LinkButton>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
