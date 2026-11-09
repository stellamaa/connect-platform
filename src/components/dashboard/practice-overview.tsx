"use client";

import { ActivityList } from "@/components/dashboard/activity-list";
import { StatGrid } from "@/components/dashboard/stat-grid";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { PageHeader } from "@/components/ui/page-header";
import { practitioner } from "@/constants/people";
import { routes } from "@/constants/routes";
import { useRole } from "@/hooks/use-role";

export function PracticeOverview() {
  const { role } = useRole();

  if (role === "client") {
    return (
      <EmptyState
        title="The practice overview is Mara’s view"
        body="Your tray for the days between sessions lives on Today."
        action={<Button href={routes.today}>Open today</Button>}
      />
    );
  }

  return (
    <>
      <PageHeader
        eyebrow={practitioner.practiceName}
        title="The practice this week"
        description={practitioner.focus}
        action={
          <Button href={routes.clients} variant="secondary">
            Open the roster
          </Button>
        }
      />
      <StatGrid />
      <section className="mt-10">
        <h2 className="font-serif text-2xl text-ink">Recent movement</h2>
        <p className="mt-1 text-sm text-ink-soft">
          A fixed sample of the week. Live activity arrives with the database.
        </p>
        <ActivityList />
      </section>
    </>
  );
}
