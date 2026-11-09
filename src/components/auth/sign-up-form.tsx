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

export function SignUpForm() {
  const router = useRouter();
  const { setRole } = useRole();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [choice, setChoice] = useState<Role>("practitioner");
  const [error, setError] = useState("");

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (name.trim().length < 2 || !email.includes("@")) {
      setError("Add your name and an email address. Neither is stored yet.");
      return;
    }
    setError("");
    setRole(choice);
    router.push(choice === "practitioner" ? routes.dashboard : routes.today);
  }

  return (
    <AuthPanel
      title="Open the practice"
      lede="Create-account is a form in this build, not an account. The sample people stay Mara, Jonah, Priya, and Luis. Your name is not saved."
    >
      <form onSubmit={submit} className="space-y-5" noValidate>
        <TextField label="Name" name="name" autoComplete="name" value={name} onChange={setName} />
        <TextField
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          value={email}
          onChange={setEmail}
        />
        <fieldset>
          <legend className="mb-2 text-sm text-ink-soft">I am opening this as</legend>
          <div className="grid grid-cols-2 gap-2">
            {roleOrder.map((role) => (
              <label
                key={role}
                className={cn(
                  "cursor-pointer rounded-md border px-3 py-3 text-sm",
                  choice === role ? "border-moss bg-sage-soft text-moss" : "border-line text-ink",
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
                {roles[role].label}
              </label>
            ))}
          </div>
        </fieldset>
        {error ? (
          <p role="alert" className="text-sm text-clay">
            {error}
          </p>
        ) : null}
        <Button type="submit">Enter Stillroom</Button>
      </form>
    </AuthPanel>
  );
}
