import type { Client, Practitioner } from "@/types/platform";

export const practitioner: Practitioner = {
  id: "prac_mara",
  name: "Mara Ellison",
  credentials: "SEP, MBACP",
  practiceName: "Stillroom Practice",
  city: "Bristol",
  focus: "Somatic therapy for people who leave the room still buzzing",
  bio: "Mara works with clients who understand the session and then lose the thread by midweek. Connect is where she leaves the thread.",
};

export const clients: readonly Client[] = [
  {
    id: "client_jonah",
    name: "Jonah Adeyemi",
    focus: "Anxiety that gathers on Sunday evenings",
    nextSession: "Thursday · 16:00",
    since: "January 2026",
    note: "Does well with a short practice he can start without deciding anything.",
  },
  {
    id: "client_priya",
    name: "Priya Shah",
    focus: "Staying near something that is not finished",
    nextSession: "Tuesday · 11:30",
    since: "November 2025",
    note: "Writing lands more easily than talking when the week has been loud.",
  },
  {
    id: "client_luis",
    name: "Luis Ortega",
    focus: "Sleep that starts too late and too bright",
    nextSession: "Monday · 18:15",
    since: "March 2026",
    note: "The hour before bed is the piece we are practising outside the room.",
  },
];

/** The client view previews one person so the tray has a real shape. */
export const previewClient = clients[0];
