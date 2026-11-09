"use client";

import { RoleSwitch } from "@/components/layout/role-switch";
import { PageHeader } from "@/components/ui/page-header";
import { practitioner, previewClient } from "@/constants/people";
import { roles } from "@/constants/roles";
import { useRole } from "@/hooks/use-role";

export function SettingsPanel() {
  const { role, name } = useRole();
  const person = role === "client" ? previewClient : practitioner;

  return (
    <>
      <PageHeader
        eyebrow="This browser"
        title="Settings"
        description="The view switch is the only preference this build stores. It stays on this device."
        action={<RoleSwitch />}
      />
      <dl className="grid max-w-xl gap-5">
        <div>
          <dt className="text-xs tracking-wide text-ink-soft uppercase">Signed-in preview</dt>
          <dd className="mt-1 font-sans tracking-tight text-2xl text-ink">{name}</dd>
        </div>
        <div>
          <dt className="text-xs tracking-wide text-ink-soft uppercase">View</dt>
          <dd className="mt-1 text-ink">{roles[role].label}</dd>
          <dd className="text-sm text-ink-soft">{roles[role].description}</dd>
        </div>
        <div>
          <dt className="text-xs tracking-wide text-ink-soft uppercase">Practice</dt>
          <dd className="mt-1 text-ink">
            {practitioner.practiceName} · {practitioner.city}
          </dd>
        </div>
        {"focus" in person ? (
          <div>
            <dt className="text-xs tracking-wide text-ink-soft uppercase">Focus</dt>
            <dd className="mt-1 text-ink">{person.focus}</dd>
          </div>
        ) : null}
      </dl>
      <p className="mt-8 max-w-xl text-sm leading-6 text-ink-soft">
        Accounts, passwords, and a shared database are not connected. Changing the
        view rewrites a single value in local storage. Clearing site data returns
        you to the practice view.
      </p>
    </>
  );
}
