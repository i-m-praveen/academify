import Link from "next/link";
import { Facebook, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui/Container";
import { footerNav, siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-ink-muted">
            {siteConfig.description}
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a
              href={siteConfig.social.linkedin}
              aria-label="Academify on LinkedIn"
              className="text-ink-muted hover:text-primary focus-ring rounded-xs"
            >
              <Linkedin className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={siteConfig.social.twitter}
              aria-label="Academify on Twitter"
              className="text-ink-muted hover:text-primary focus-ring rounded-xs"
            >
              <Twitter className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={siteConfig.social.facebook}
              aria-label="Academify on Facebook"
              className="text-ink-muted hover:text-primary focus-ring rounded-xs"
            >
              <Facebook className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <nav aria-label="Product">
          <h2 className="text-sm font-semibold text-ink">Product</h2>
          <ul className="mt-4 space-y-3">
            {footerNav.product.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-ink-muted hover:text-primary focus-ring rounded-xs">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <h2 className="text-sm font-semibold text-ink">Company</h2>
          <ul className="mt-4 space-y-3">
            {footerNav.company.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-ink-muted hover:text-primary focus-ring rounded-xs">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold text-ink">Get in touch</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-sm text-ink-muted hover:text-primary focus-ring rounded-xs"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm text-ink-muted hover:text-primary focus-ring rounded-xs"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {siteConfig.phone}
              </a>
            </li>
            <li className="text-sm text-ink-muted">{siteConfig.address}</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-border py-6">
        <Container className="flex flex-col items-center justify-between gap-2 sm:flex-row">
          <p className="text-xs text-ink-muted">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-ink-muted">Assessment infrastructure for institutions.</p>
        </Container>
      </div>
    </footer>
  );
}
