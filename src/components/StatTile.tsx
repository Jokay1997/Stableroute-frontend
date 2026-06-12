import { type ReactNode } from "react";

type Props = {
  label: ReactNode;
  value: ReactNode;
};

export function StatTile({ label, value }: Props) {
  return (
    <div className="rounded-lg border border-neutral-200 p-4 text-center dark:border-neutral-800">
      <dt className="text-xs uppercase tracking-wide text-neutral-500">{label}</dt>
      <dd className="mt-1 text-2xl font-semibold">{value}</dd>
    </div>
  );
}
