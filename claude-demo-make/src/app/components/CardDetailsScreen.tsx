import { X, WalletCards, Search, MoreHorizontal, ChevronRight } from "lucide-react";

function TxRow({
  color,
  initial,
  name,
  meta,
  amount,
  cashback,
  declined,
}: {
  color: string;
  initial: string;
  name: string;
  meta: string;
  amount: string;
  cashback?: string;
  declined?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 py-2.5">
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-[13px] font-semibold"
        style={{ background: color }}
      >
        {initial}
      </div>
      <div className="flex-1 min-w-0">
        <div className={`text-[14px] font-semibold ${declined ? "text-[#FF9F0A]" : "text-black"} truncate`}>
          {name}
        </div>
        <div className="text-[11px] text-[#8E8E93] truncate">{meta}</div>
      </div>
      <div className="text-right">
        <div className={`text-[14px] font-semibold ${declined ? "text-[#8E8E93] line-through" : "text-black"}`}>
          {amount}
        </div>
        {cashback && <div className="text-[11px] text-[#8E8E93]">{cashback}</div>}
      </div>
      <ChevronRight size={14} className="text-[#C7C7CC]" />
    </div>
  );
}

export function CardDetailsScreen() {
  return (
    <div className="h-full flex flex-col overflow-y-auto bg-[#F2F2F7]">
      {/* Top bar */}
      <div className="px-4 pt-2 pb-3 flex items-center justify-between">
        <button className="w-9 h-9 rounded-full bg-[#E5E5EA] flex items-center justify-center text-[#3C3C43]">
          <X size={18} strokeWidth={2.5} />
        </button>
        <div className="flex items-center gap-2">
          <button className="w-9 h-9 rounded-full bg-[#E5E5EA] flex items-center justify-center text-[#3C3C43]">
            <WalletCards size={16} />
          </button>
          <button className="w-9 h-9 rounded-full bg-[#E5E5EA] flex items-center justify-center text-[#3C3C43]">
            <Search size={16} />
          </button>
          <button className="w-9 h-9 rounded-full bg-[#E5E5EA] flex items-center justify-center text-[#3C3C43]">
            <MoreHorizontal size={16} />
          </button>
        </div>
      </div>

      {/* Card visual (full width) */}
      <div className="px-4">
        <div
          className="relative w-full overflow-hidden"
          style={{
            aspectRatio: "1.6 / 1",
            borderRadius: 18,
            background:
              "linear-gradient(135deg, #C9A6E8 0%, #E59BC4 30%, #F0B27A 60%, #F4D35E 90%)",
            boxShadow: "0 12px 26px rgba(0,0,0,0.15)",
          }}
        >
          <div className="absolute top-3 left-3 text-white/95">
            <svg viewBox="0 0 384 512" width={20} height={24} fill="currentColor">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>
          </div>
          <div className="absolute bottom-3 right-3 flex">
            <div className="w-6 h-6 rounded-full bg-[#EB001B] opacity-90" />
            <div className="w-6 h-6 rounded-full bg-[#F79E1B] -ml-3 opacity-90 mix-blend-multiply" />
          </div>
        </div>
      </div>

      {/* Balance + Payment Due row */}
      <div className="px-4 mt-4 flex gap-3 items-stretch">
        <div className="flex-1">
          <div className="text-[11px] text-[#8E8E93]">Card Balance</div>
          <div className="text-[22px] font-semibold text-black leading-tight">US$12.94</div>
          <div className="text-[10px] text-[#8E8E93] mt-0.5">US$11,337.06 Available</div>
        </div>
        <div className="bg-[#D7E4FF] rounded-xl px-3 py-2.5 w-[126px] flex flex-col">
          <div className="text-[10px] text-[#3A6FF7]">Payment Due</div>
          <div className="text-[15px] font-semibold text-black leading-tight">1 Apr</div>
          <button className="mt-auto self-end bg-black text-white text-[11px] font-semibold rounded-full px-3 py-1">
            Pay Early
          </button>
        </div>
      </div>

      {/* Yearly Activity */}
      <div className="px-4 mt-4">
        <div className="text-[11px] text-[#8E8E93]">Yearly Activity</div>
        <div className="text-[12px] text-black font-medium">+US$0.25 Daily Cash</div>
        <div className="mt-1.5 flex items-end gap-[3px] h-7">
          {[6, 10, 8, 14, 9, 18, 22, 16, 24, 12, 9, 15].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm"
              style={{
                height: `${h * 1.1}px`,
                background: i === 6 ? "#FF6B3D" : i % 3 === 0 ? "#C77DFF" : "#F4A261",
              }}
            />
          ))}
        </div>
      </div>

      {/* Transactions */}
      <div className="mt-4 bg-white rounded-t-2xl px-4 pt-3 pb-6 flex-1">
        <div className="text-[15px] font-semibold text-black mb-1">Latest Card Transactions</div>
        <TxRow
          color="#7B5BD9"
          initial="S"
          name="Starbucks"
          meta="Singapore, SG · 4/2/26"
          amount="US$6.23"
          cashback="2%"
        />
        <div className="h-px bg-[#F2F2F7] ml-12" />
        <TxRow
          color="#F4A261"
          initial="C"
          name="Cold Storage"
          meta="Singapore, SG · 4/2/26"
          amount="US$6.71"
          cashback="2%"
        />
        <div className="h-px bg-[#F2F2F7] ml-12" />
        <TxRow
          color="#A78BFA"
          initial="P"
          name="Prudential"
          meta="Declined · Expired Card · 7/8/25"
          amount="US$2,312.08"
          declined
        />
      </div>
    </div>
  );
}
