import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog-data";

/** A Newsroom-style card: image, category, headline, date. The whole card is the link. */
export default function PostCard({ post, priority }: { post: BlogPost; priority?: boolean }) {
  const external = Boolean(post.externalLink);
  const href = post.externalLink ?? `/blog/${post.slug}`;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[28px] bg-ap-tile">
      <div className="relative aspect-[16/10] overflow-hidden bg-ap-alt">
        <Image
          src={post.heroImage}
          alt=""
          fill
          priority={priority}
          sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.28,0.11,0.32,1)] group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <p className="ap-caption font-semibold uppercase tracking-[0.06em] text-ap-ink-3">{post.category}</p>
        <h3 className="ap-h4 mt-2">
          <Link
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="ap-stretched-link"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-auto pt-6 text-[14px] text-ap-ink-3">
          {post.date} · {post.readTime}
        </p>
      </div>
    </article>
  );
}
