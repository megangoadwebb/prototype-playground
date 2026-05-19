import { X } from "lucide-react";
import { ProgressRing } from "./ProgressRing";

export function NothingDueScreen() {
  return (
    <div className="h-full flex flex-col">
      <div className="px-5 pt-2 pb-3">
        <div className="h-9 flex items-center">
          <button className="w-9 h-9 rounded-full bg-[#E5E5EA] flex items-center justify-center text-[#3C3C43]">
            <X size={18} strokeWidth={2.5} />
          </button>
        </div>
        <div className="mt-3">
          <div className="text-[26px] font-semibold leading-tight text-black">Nothing Due</div>
          <div className="text-[14px] text-[#8E8E93] mt-1">You have nothing to pay right now.</div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center px-5">
        <div className="mt-2">
          <ProgressRing
            size={230}
            stroke={18}
            progress={0}
            color="#E5E5EA"
            topLabel="TOTAL BALANCE · US$0.00"
            bottomLabel="AVAILABLE CREDIT · US$11,500.00"
            labelColor="#C7C7CC"
          >
            <div className="flex items-baseline">
              <span className="text-[18px] text-[#C7C7CC] font-medium mr-0.5">US$</span>
              <span className="text-[44px] font-semibold text-[#C7C7CC] tracking-tight">0.00</span>
            </div>
          </ProgressRing>
        </div>

        <div className="mt-5 text-center px-2">
          <div className="text-[17px] font-semibold text-black">Card Balance Paid</div>
          <p className="text-[13px] text-[#8E8E93] mt-1 leading-snug">
            You've paid your monthly balance and no payments are due until 30 April.
          </p>
          <div className="mt-3">
            <span className="text-[14px] text-[#0A84FF] font-medium">Learn More</span>
          </div>
        </div>
      </div>

      <div className="px-5 pb-6 pt-3">
        <button className="h-[50px] w-full px-6 rounded-full bg-black text-white text-[15px] font-semibold flex items-center justify-center">
          Done
        </button>
      </div>
    </div>
  );
}
