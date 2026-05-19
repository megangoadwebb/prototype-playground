import { ReactNode } from "react";
import { Link } from "react-router";
import { PhoneFrame } from "../components/PhoneFrame";

export function ScreenPage({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-[#FAFAFA] flex flex-col items-center justify-center py-10 px-4">
      <Link to="/" className="text-[12px] uppercase tracking-[0.2em] text-neutral-400 mb-6 hover:text-neutral-700">
        ← Back to storyboard
      </Link>
      <PhoneFrame label={label}>{children}</PhoneFrame>
    </div>
  );
}
