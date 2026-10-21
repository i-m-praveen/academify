import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Resources and perspectives on assessment infrastructure, question bank design, and running Olympiads at scale.",
  alternates: { canonical: "/blog" },
  openGraph: { url: "/blog", title: "Blog | Academify" },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <Breadcrumbs items={[{ name: "Blog", url: "/blog" }]} />
      <PageHero
        eyebrow="Resources"
        title="Perspectives on assessment infrastructure"
        description="Notes on question bank design, test delivery, and running large-scale assessment programs."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded bg-white p-6 shadow-sm border border-border transition-shadow hover:shadow-md focus-ring"
              >
                <div className="flex items-center gap-2 text-xs font-medium text-ink-muted">
                  <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <h2 className="mt-3 font-heading text-xl font-semibold text-ink">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-ink-muted">{post.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Read article
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
