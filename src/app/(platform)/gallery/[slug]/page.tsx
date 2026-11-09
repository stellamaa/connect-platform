import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ImageDetail } from "@/components/gallery/image-detail";
import { images } from "@/constants/images";
import { getImage } from "@/lib/catalog";

export function generateStaticParams() {
  return images.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const image = getImage(slug);
  return { title: image?.title ?? "Image" };
}

export default async function ImagePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const image = getImage(slug);
  if (!image) notFound();
  return <ImageDetail image={image} />;
}
