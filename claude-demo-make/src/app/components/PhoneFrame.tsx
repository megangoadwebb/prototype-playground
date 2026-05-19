import { ReactNode } from "react";
import { Signal, Wifi, BatteryFull } from "lucide-react";

export function PhoneFrame({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-3 shrink-0">
      <div className="text-xs tracking-wide text-neutral-500 uppercase">{label}</div>
      <div
        className="relative bg-white overflow-hidden"
        style={{
          width: 322,
          height: 698,
          borderRadius: 46,
          boxShadow: "0 30px 60px -20px rgba(0,0,0,0.25), 0 0 0 8px #111 inset, 0 0 0 9px #2a2a2a",
        }}
      >
        {/* Screen interior */}
        <div className="absolute inset-[10px] rounded-[38px] overflow-hidden bg-[#F2F2F7]">
          {/* Status bar */}
          <div className="h-11 px-6 flex items-center justify-between text-black text-[13px] font-semibold relative z-10">
            <span>9:41</span>
            <div className="absolute left-1/2 -translate-x-1/2 top-1.5 w-[110px] h-[26px] rounded-full bg-black" />
            <div className="flex items-center gap-1">
              <Signal size={14} strokeWidth={2.5} />
              <Wifi size={14} strokeWidth={2.5} />
              <BatteryFull size={18} strokeWidth={2} />
            </div>
          </div>

          {/* Demo watermark */}
          <div className="pointer-events-none absolute top-12 left-0 right-0 flex justify-center z-20">
            <div className="text-[9px] tracking-[0.3em] text-black/15 font-semibold">DEMO ONLY</div>
          </div>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-0">
            <div
              className="text-black/[0.035] font-bold tracking-[0.4em]"
              style={{ fontSize: 56, transform: "rotate(-30deg)" }}
            >
              DEMO ONLY
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-[calc(100%-44px)] overflow-hidden">{children}</div>
        </div>
      </div>
    </div>
  );
}
