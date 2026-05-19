import { PhoneFrame } from "../components/PhoneFrame";
import { CardDetailsScreen } from "../components/CardDetailsScreen";
import { NothingDueScreen } from "../components/NothingDueScreen";
import { Screen1 } from "../components/screens";

const screens = [
  { label: "Card Details", node: <CardDetailsScreen /> },
  { label: "Nothing Due", node: <NothingDueScreen /> },
  { label: "Choose Amount", node: <Screen1 /> },
];

export function Home() {
  return (
    <div className="min-h-screen w-full bg-[#FAFAFA] py-12">
      <div className="px-10 mb-8">
        <div className="text-[13px] uppercase tracking-[0.2em] text-neutral-400">
          Apple Wallet · Demo Prototype
        </div>
        <h1 className="text-[28px] font-semibold text-neutral-900 mt-1">
          Payment due in Apple Wallet
        </h1>
      </div>
      <div className="overflow-x-auto pb-12">
        <div className="flex gap-8 px-10 w-max items-start">
          {screens.map((s) => (
            <PhoneFrame key={s.label} label={s.label}>
              {s.node}
            </PhoneFrame>
          ))}
        </div>
      </div>
    </div>
  );
}
