import { cn } from "@/lib/cn";
import type { CircleMessage } from "@/types/platform";

export function MessageThread({ messages }: { messages: readonly CircleMessage[] }) {
  if (messages.length === 0) {
    return <p className="text-sm text-ink-soft">No notes in this channel yet.</p>;
  }

  return (
    <ol className="space-y-4" aria-live="polite">
      {messages.map((message) => (
        <li key={message.id} className="max-w-xl">
          <p className="text-xs text-ink-soft">
            <span className="text-ink">{message.authorName}</span>
            {" · "}
            {message.authorRole === "practitioner" ? "Practice" : "Client"}
            {" · "}
            {message.sentAtLabel}
          </p>
          <p
            className={cn(
              "mt-1 rounded-2xl px-4 py-3 text-sm leading-6",
              message.authorRole === "practitioner"
                ? "bg-sage-soft text-moss"
                : "bg-paper-raised text-ink",
            )}
          >
            {message.body}
          </p>
        </li>
      ))}
    </ol>
  );
}
