"use client";

import { ClientCard } from "@/components/clients/client-card";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { PageHeader } from "@/components/ui/page-header";
import { routes } from "@/constants/routes";
import { useClients } from "@/hooks/use-clients";

export function ClientRoster() {
  const clients = useClients();

  if (clients.length === 0) {
    return (
      <EmptyState
        title="The roster belongs to the practice view"
        body="Switch to Practice to see the people in Stillroom, and what has been left with each of them."
        action={
          <Button href={routes.today} variant="secondary">
            Back to today
          </Button>
        }
      />
    );
  }

  return (
    <>
      <PageHeader
        eyebrow="Roster"
        title="Clients"
        description="Three people in the sample practice. Open a record to see the materials in their tray."
      />
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {clients.map((client) => (
          <li key={client.id}>
            <ClientCard client={client} />
          </li>
        ))}
      </ul>
    </>
  );
}
