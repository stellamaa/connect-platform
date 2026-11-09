import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ClientRecord } from "@/components/clients/client-record";
import { clients } from "@/constants/people";
import { getClient } from "@/lib/catalog";

export function generateStaticParams() {
  return clients.map((client) => ({ id: client.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const client = getClient(id);
  return { title: client?.name ?? "Client" };
}

export default async function ClientPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const client = getClient(id);
  if (!client) notFound();
  return <ClientRecord clientId={id} />;
}
