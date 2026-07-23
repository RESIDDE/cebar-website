import React from "react";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import BlogDetailClient from "./blog-detail-client";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | CEBAR Group`,
    description: post.summary,
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();
  return <BlogDetailClient post={post} />;
}
