import type { Metadata } from "next";
import { ClientRoster } from "@/components/clients/client-roster";

export const metadata: Metadata = {
  title: "Clients",
};

export default function ClientsPage() {
  return <ClientRoster />;
}
