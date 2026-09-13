import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CalendarDays, User } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, articleSchema } from "@/lib/schema";
import { getPostBySlug, getPostSlugs } from "@/lib/mdx";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.meta.title,
    description: post.meta.description,
    alternates: { canonical: `/blog/${post.meta.slug}` },
    openGraph: {
      url: `/blog/${post.meta.slug}`,
      title: post.meta.title,
      description: post.meta.description,
      type: "article",
      publishedTime: post.meta.date,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: post.meta.title,
          description: post.meta.description,
          slug: post.meta.slug,
          datePublished: post.meta.date,
          author: post.meta.author,
        })}
      />
      <Breadcrumbs
        items={[
          { name: "Blog", url: "/blog" },
          { name: post.meta.title, url: `/blog/${post.meta.slug}` },
        ]}
      />

      <article className="py-16 sm:py-20">
        <Container className="mx-auto max-w-3xl">
          <header className="mb-10 border-b border-border pb-8">
            <h1 className="font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              {post.meta.title}
            </h1>
            <p className="mt-4 text-lg text-ink-muted">{post.meta.description}</p>
            <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-ink-muted">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" aria-hidden="true" />
                {post.meta.author}
              </span>
              <span className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                <time dateTime={post.meta.date}>
                  {new Date(post.meta.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </span>
            </div>
          </header>

          <div className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:text-ink prose-a:text-primary prose-strong:text-ink">
            <MDXRemote source={post.content} />
          </div>
        </Container>
      </article>
    </>
  );
}
