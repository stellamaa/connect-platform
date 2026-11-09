import type { Channel, CircleMessage } from "@/types/platform";

export const channels: readonly Channel[] = [
  {
    id: "channel_circle",
    name: "Stillroom circle",
    description: "Notes for everyone currently in the practice.",
  },
  {
    id: "channel_checkins",
    name: "Quiet check-ins",
    description: "A shorter place to say how the week is sitting.",
  },
];

export const messages: readonly CircleMessage[] = [
  {
    id: "msg_1",
    channelId: "channel_circle",
    authorName: "Mara Ellison",
    authorRole: "practitioner",
    body: "I have left this week’s materials in your trays. Use the short one if the long one feels like too much of a decision.",
    sentAtLabel: "Mon · 09:10",
  },
  {
    id: "msg_2",
    channelId: "channel_circle",
    authorName: "Priya Shah",
    authorRole: "client",
    body: "The letter prompt was the right size. I stopped when I had said it once.",
    sentAtLabel: "Mon · 19:42",
  },
  {
    id: "msg_3",
    channelId: "channel_checkins",
    authorName: "Jonah Adeyemi",
    authorRole: "client",
    body: "Sunday was crowded rather than dramatic. I did the eight minutes.",
    sentAtLabel: "Sun · 21:05",
  },
  {
    id: "msg_4",
    channelId: "channel_checkins",
    authorName: "Mara Ellison",
    authorRole: "practitioner",
    body: "Crowded is a useful word. Bring the eight minutes with you on Thursday — we will start there.",
    sentAtLabel: "Sun · 21:20",
  },
  {
    id: "msg_5",
    channelId: "channel_circle",
    authorName: "Luis Ortega",
    authorRole: "client",
    body: "I sat up for the evening practice and then actually got into bed. The list stayed on the paper.",
    sentAtLabel: "Tue · 07:55",
  },
];
