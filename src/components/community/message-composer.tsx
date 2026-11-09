import { Button } from "@/components/ui/button";

export function MessageComposer({
  value,
  onChange,
  onSend,
}: {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
}) {
  return (
    <form
      className="mt-4 flex flex-col gap-3 border-t border-line pt-4 sm:flex-row"
      onSubmit={(event) => {
        event.preventDefault();
        onSend();
      }}
    >
      <label className="sr-only" htmlFor="circle-draft">
        Write a note
      </label>
      <input
        id="circle-draft"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="A short note for this channel"
        className="w-full rounded-full border border-line bg-paper px-4 py-3 text-sm outline-none focus:border-sage"
      />
      <Button type="submit" disabled={value.trim().length === 0}>
        Send
      </Button>
    </form>
  );
}
