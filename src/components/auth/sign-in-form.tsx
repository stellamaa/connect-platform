"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AuthPanel } from "@/components/auth/auth-panel";
import { Button } from "@/components/ui/button";
import { TextField } from "@/components/ui/text-field";
import { routes } from "@/constants/routes";
import { roleOrder, roles } from "@/constants/roles";
import { useRole } from "@/hooks/use-role";
import { cn } from "@/lib/cn";
import type { Role } from "@/types/platform";

export function SignInForm() {
  const router = useRouter();
  const { setRole } = useRole();
  const [email, setEmail] = useState("");
  const [choice, setChoice] = useState<Role>("practitioner");
  const [error, setError] = useState("");

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.includes("@")) {
      setError("Enter an email address to continue into the preview.");
      return;
    }
    setError("");
    setRole(choice);
    router.push(choice === "practitioner" ? routes.dashboard : routes.today);
  }

  return (
    <AuthPanel
      title="Sign in"
      lede="This preview does not check a password. Choose the practice view or the client view, then enter Stillroom."
    >
      <form onSubmit={submit} className="space-y-5" noValidate>
        <TextField
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          value={email}
          onChange={setEmail}
          placeholder="you@practice.test"
        />
        <fieldset>
          <legend className="mb-2 text-sm text-ink-soft">Enter as</legend>
          <div className="grid gap-2">
            {roleOrder.map((role) => (
              <label
                key={role}
                className={cn(
                  "cursor-pointer rounded-md border px-4 py-3",
                  choice === role ? "border-moss bg-sage-soft" : "border-line",
                )}
              >
                <input
                  type="radio"
                  name="role"
                  value={role}
                  checked={choice === role}
                  onChange={() => setChoice(role)}
                  className="mr-2 accent-moss"
                />
                <span className="font-medium text-ink">{roles[role].label}</span>
                <span className="mt-1 block pl-6 text-sm text-ink-soft">
                  {roles[role].description}
                </span>
              </label>
            ))}
          </div>
        </fieldset>
        {error ? (
          <p role="alert" className="text-sm text-clay">
            {error}
          </p>
        ) : null}
        <Button type="submit">Continue</Button>
      </form>
    </AuthPanel>
  );
}
