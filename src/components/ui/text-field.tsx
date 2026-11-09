export function TextField({
  label,
  value,
  onChange,
  type = "text",
  name,
  placeholder,
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "email" | "search";
  name?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block text-ink-soft">{label}</span>
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-md border border-line bg-paper-raised px-4 py-3 text-ink outline-none placeholder:text-ink-soft/50 focus:border-ink"
      />
    </label>
  );
}
