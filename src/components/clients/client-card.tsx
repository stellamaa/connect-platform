import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { routes } from "@/constants/routes";
import type { Client } from "@/types/platform";

export function ClientCard({ client }: { client: Client }) {
  return (
    <Link href={routes.client(client.id)} className="block h-full">
      <Card className="flex h-full flex-col hover:border-sage">
        <div className="flex items-start justify-between gap-3">
          <h2 className="font-serif text-2xl text-ink">{client.name}</h2>
          <Badge tone="ink">{client.since}</Badge>
        </div>
        <p className="mt-3 flex-1 text-sm leading-6 text-ink-soft">{client.focus}</p>
        <p className="mt-4 text-sm text-moss">Next session · {client.nextSession}</p>
      </Card>
    </Link>
  );
}
