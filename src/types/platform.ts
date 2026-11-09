export type Role = "practitioner" | "client";

export type Practitioner = {
  id: string;
  name: string;
  credentials: string;
  practiceName: string;
  city: string;
  focus: string;
  bio: string;
};

export type Client = {
  id: string;
  name: string;
  focus: string;
  nextSession: string;
  since: string;
  note: string;
};

/** Anything a practitioner can leave in a client's tray. */
export type Assignable = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  tags: readonly string[];
  assignedClientIds: readonly string[];
  updatedLabel: string;
};

export type Meditation = Assignable & {
  kind: "meditation";
  durationMinutes: number;
  intention: string;
  guidance: readonly string[];
};

export type WritingPrompt = Assignable & {
  kind: "prompt";
  invitation: string;
  questions: readonly string[];
};

export type LessonSection = {
  heading: string;
  paragraphs: readonly string[];
};

export type Lesson = Assignable & {
  kind: "learning";
  readingMinutes: number;
  sections: readonly LessonSection[];
};

export type GalleryImage = Assignable & {
  kind: "image";
  caption: string;
  wash: string;
  field: string;
};

export type Channel = {
  id: string;
  name: string;
  description: string;
};

export type CircleMessage = {
  id: string;
  channelId: string;
  authorName: string;
  authorRole: Role;
  body: string;
  sentAtLabel: string;
};

export type ActivityItem = {
  id: string;
  label: string;
  detail: string;
  when: string;
};

export type ContentTypeId =
  | "meditation"
  | "prompt"
  | "learning"
  | "image"
  | "community";

export type NavItem = {
  href: string;
  label: string;
  note: string;
};
