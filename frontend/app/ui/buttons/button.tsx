"use client";

export type variant = "primary" | "secondary";

export default function Button({
  action,
  variant,
  label,
}: {
  action: () => void;
  variant: variant;
  label: string;
}) {
  return (
    <button
      onClick={action}
      className="text-white px-4 py-[5px] rounded bg-shark-950 hover:bg-shark-900"
    >
      {label}
    </button>
  );
}
