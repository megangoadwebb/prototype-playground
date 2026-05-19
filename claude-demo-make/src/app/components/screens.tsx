import { X, ChevronLeft, Check, Plus, Building2, CreditCard, Wallet, ScanFace, Share, Loader2, Info, Star } from "lucide-react";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { AppleCard } from "./AppleCard";
import { ProgressRing } from "./ProgressRing";

const pillPrimary =
  "h-[50px] px-6 rounded-full bg-black text-white text-[15px] font-semibold flex items-center justify-center gap-2 active:opacity-80";
const pillSecondary =
  "h-[50px] px-6 rounded-full bg-[#E5E5EA] text-black text-[15px] font-semibold flex items-center justify-center active:opacity-80";

function ScreenHeader({ title, subtitle, back, to }: { title?: string; subtitle?: string; back?: boolean; to?: string }) {
  const navigate = useNavigate();
  const handle = () => (to ? navigate(to) : navigate(-1));
  return (
    <div className="px-5 pt-2 pb-3">
      <div className="h-9 flex items-center">
        <button onClick={handle} className="w-9 h-9 rounded-full bg-[#E5E5EA] flex items-center justify-center text-[#3C3C43]">
          {back ? <ChevronLeft size={20} /> : <X size={18} strokeWidth={2.5} />}
        </button>
      </div>
      {title && (
        <div className="mt-3">
          <div className="text-[26px] font-semibold leading-tight text-black">{title}</div>
          {subtitle && <div className="text-[14px] text-[#8E8E93] mt-1 leading-snug">{subtitle}</div>}
        </div>
      )}
    </div>
  );
}

/* ----------------- Screen 1 ----------------- */
export function Screen1() {
  const navigate = useNavigate();
  return (
    <div className="h-full flex flex-col">
      <ScreenHeader title="Choose Amount" subtitle={"Make payments by 11:59 AM on\n1 April."} to="/" />
      <div className="flex-1 flex flex-col items-center px-5">
        <div className="mt-1">
          <ProgressRing
            size={230}
            stroke={18}
            progress={1}
            topLabel="CARD BALANCE · US$12.94"
            bottomLabel="NO INTEREST CHARGES"
            topBadge={
              <div className="w-6 h-6 rounded-full bg-[#34C759] border-2 border-white flex items-center justify-center shadow">
                <Star size={12} strokeWidth={3} className="text-white" fill="white" />
              </div>
            }
          >
            <div className="flex items-baseline">
              <span className="text-[18px] text-black font-medium mr-0.5">US$</span>
              <span className="text-[44px] font-semibold text-black tracking-tight">12.94</span>
            </div>
          </ProgressRing>
        </div>

        <div className="mt-5 text-center px-2">
          <div className="text-[17px] font-semibold text-black">Pay February Balance</div>
          <p className="text-[13px] text-[#8E8E93] mt-1 leading-snug">
            Paying your monthly balance is recommended to help keep you financially healthy and avoid interest charges.
          </p>
          <div className="mt-3 flex flex-col items-center gap-1.5">
            <span className="inline-flex items-center gap-1.5 text-[14px] text-[#0A84FF] font-medium">
              <Info size={14} /> Learn More
            </span>
            <span className="inline-flex items-center gap-1.5 text-[14px] text-[#0A84FF] font-medium">
              <CreditCard size={14} /> Other Amount
            </span>
          </div>
        </div>
      </div>

      <div className="px-5 pb-6 pt-3 flex gap-2.5">
        <button className={`${pillSecondary} flex-1`}>Schedule</button>
        <button onClick={() => navigate("/source")} className={`${pillPrimary} flex-[1.4]`}>Pay US$12.94</button>
      </div>
    </div>
  );
}

/* ----------------- Screen 2 ----------------- */
function PayRow({
  icon,
  name,
  detail,
  selected,
  accent,
}: {
  icon: React.ReactNode;
  name: string;
  detail: string;
  selected?: boolean;
  accent?: string;
}) {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-3.5 bg-white ${
        selected ? "ring-2 ring-[#0A84FF]" : ""
      } rounded-2xl`}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
        style={{ background: accent ?? "#0A84FF" }}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[15px] font-semibold text-black truncate">{name}</div>
        <div className="text-[12px] text-[#8E8E93] truncate">{detail}</div>
      </div>
      {selected && (
        <div className="w-6 h-6 rounded-full bg-[#34C759] flex items-center justify-center">
          <Check size={14} strokeWidth={3} className="text-white" />
        </div>
      )}
    </div>
  );
}

export function Screen2() {
  const navigate = useNavigate();
  return (
    <div className="h-full flex flex-col">
      <ScreenHeader back title="Pay From" subtitle="Select a payment source" />
      <div className="flex-1 px-4 space-y-2 overflow-hidden">
        <PayRow
          icon={<Building2 size={20} />}
          name="Bank of America Checking"
          detail="••2847 · Default"
          selected
          accent="#E11D48"
        />
        <PayRow icon={<CreditCard size={20} />} name="Chase Debit" detail="••5621" accent="#1D4ED8" />
        <PayRow icon={<Wallet size={20} />} name="Apple Cash" detail="Balance $142.50" accent="#111" />
        <button className="w-full flex items-center gap-3 px-4 py-3.5 bg-white rounded-2xl">
          <div className="w-10 h-10 rounded-xl bg-[#E5E5EA] flex items-center justify-center text-[#0A84FF]">
            <Plus size={20} strokeWidth={2.5} />
          </div>
          <span className="text-[15px] font-semibold text-[#0A84FF]">Add a new bank account</span>
        </button>
      </div>
      <div className="px-5 pb-6 pt-3">
        <button onClick={() => navigate("/review")} className={`${pillPrimary} w-full`}>Continue</button>
      </div>
    </div>
  );
}

/* ----------------- Screen 3 ----------------- */
export function Screen3() {
  const navigate = useNavigate();
  return (
    <div className="h-full flex flex-col">
      <ScreenHeader back title="Review & Pay" />
      <div className="flex-1 px-4">
        <div className="bg-white rounded-3xl p-6 flex flex-col items-center">
          <div className="text-[12px] uppercase tracking-wider text-[#8E8E93]">Payment amount</div>
          <div className="mt-1 flex items-baseline">
            <span className="text-[20px] font-medium text-black mr-1">US$</span>
            <span className="text-[48px] font-semibold text-black tracking-tight leading-none">12.94</span>
          </div>

          <div className="w-full mt-6 divide-y divide-[#F2F2F7]">
            <div className="flex justify-between py-3">
              <span className="text-[14px] text-[#8E8E93]">From</span>
              <span className="text-[14px] font-medium text-black">B of A Checking ••2847</span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-[14px] text-[#8E8E93]">To</span>
              <span className="text-[14px] font-medium text-black">Apple Card</span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-[14px] text-[#8E8E93]">Estimated arrival</span>
              <span className="text-[14px] font-medium text-black">Today</span>
            </div>
          </div>
        </div>
        <p className="text-[12px] text-[#8E8E93] mt-4 px-2 leading-snug text-center">
          Funds typically clear within minutes. Bank transfers may take 1–3 business days to fully settle.
        </p>
      </div>
      <div className="px-5 pb-6 pt-3">
        <button onClick={() => navigate("/authenticate")} className={`${pillPrimary} w-full`}>
          <ScanFace size={20} />
          Pay with Face ID
        </button>
      </div>
    </div>
  );
}

/* ----------------- Screen 4 ----------------- */
export function Screen4() {
  const navigate = useNavigate();
  useEffect(() => {
    const t = setTimeout(() => navigate("/processing"), 1800);
    return () => clearTimeout(t);
  }, [navigate]);
  return (
    <div className="relative h-full">
      {/* Blurred prior screen */}
      <div className="absolute inset-0 scale-105 blur-md opacity-60">
        <Screen3 />
      </div>
      <div className="absolute inset-0 bg-black/30" />

      {/* Top FaceID indicator */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-white">
        <div className="w-14 h-14 rounded-2xl border-2 border-white/90 flex items-center justify-center">
          <ScanFace size={28} strokeWidth={1.6} />
        </div>
        <div className="text-[15px] font-semibold mt-2">Face ID</div>
        <div className="text-[12px] text-white/80 mt-0.5">Confirm payment of US$12.94</div>
      </div>

      {/* Side button hint */}
      <div className="absolute right-[-12px] top-[180px] w-3 h-16 bg-white/70 rounded-l-sm" />
      <div className="absolute right-2 top-[260px] text-white text-[12px] font-medium text-right leading-tight w-[140px]">
        Double click side<br />button to confirm
        <div className="mt-1.5 ml-auto w-6 h-[2px] bg-white/80" />
      </div>

      {/* Bottom merchant sheet */}
      <div className="absolute bottom-6 left-4 right-4 bg-white/95 backdrop-blur rounded-3xl p-4 flex items-center gap-3 shadow-xl">
        <AppleCard size="sm" />
        <div className="flex-1">
          <div className="text-[11px] text-[#8E8E93] uppercase tracking-wide">Paying</div>
          <div className="text-[15px] font-semibold text-black">Apple Card</div>
          <div className="text-[12px] text-[#8E8E93]">B of A Checking ••2847</div>
        </div>
        <div className="text-right">
          <div className="text-[11px] text-[#8E8E93]">Amount</div>
          <div className="text-[17px] font-semibold text-black">$12.94</div>
        </div>
      </div>
    </div>
  );
}

/* ----------------- Screen 5 ----------------- */
export function Screen5() {
  const navigate = useNavigate();
  useEffect(() => {
    const t = setTimeout(() => navigate("/success"), 2200);
    return () => clearTimeout(t);
  }, [navigate]);
  return (
    <div className="h-full flex flex-col items-center pt-16 px-6">
      <AppleCard size="md" />
      <div className="mt-14 relative w-24 h-24 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-4 border-[#E5E5EA]" />
        <Loader2 size={88} strokeWidth={2} className="text-[#34C759] animate-spin" />
      </div>
      <div className="mt-8 text-[20px] font-semibold text-black">Processing your payment…</div>
      <p className="text-[13px] text-[#8E8E93] mt-2 text-center leading-snug max-w-[260px]">
        Please don't close Wallet. We're securely sending US$12.94 to your Apple Card.
      </p>
    </div>
  );
}

/* ----------------- Screen 6 ----------------- */
export function Screen6() {
  const navigate = useNavigate();
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 flex flex-col items-center pt-14 px-6">
        <div className="relative">
          <ProgressRing size={170} stroke={14} progress={1}>
            <div className="w-16 h-16 rounded-full bg-[#34C759] flex items-center justify-center">
              <Check size={36} strokeWidth={3.5} className="text-white" />
            </div>
          </ProgressRing>
        </div>
        <div className="mt-6 text-[24px] font-semibold text-black">Payment Complete</div>
        <div className="text-[14px] text-[#8E8E93] mt-1">US$12.94 paid to Apple Card</div>

        <div className="mt-7 w-full bg-white rounded-2xl divide-y divide-[#F2F2F7]">
          <div className="flex justify-between px-4 py-3">
            <span className="text-[13px] text-[#8E8E93]">From</span>
            <span className="text-[13px] font-medium text-black">B of A Checking</span>
          </div>
          <div className="flex justify-between px-4 py-3">
            <span className="text-[13px] text-[#8E8E93]">Confirmation</span>
            <span className="text-[13px] font-medium text-black">#AC-2026-04-01-8847</span>
          </div>
          <div className="flex justify-between px-4 py-3">
            <span className="text-[13px] text-[#8E8E93]">Date</span>
            <span className="text-[13px] font-medium text-black">April 1, 2026</span>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-1.5 text-[#0A84FF] text-[14px] font-medium">
          <Share size={14} /> View Receipt
        </div>
      </div>
      <div className="px-5 pb-6 pt-3">
        <button onClick={() => navigate("/")} className={`${pillPrimary} w-full`}>Done</button>
      </div>
    </div>
  );
}
