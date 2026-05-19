export function AppleCard({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const dims =
    size === "sm"
      ? "w-[180px] h-[114px] rounded-[14px]"
      : size === "lg"
      ? "w-[300px] h-[190px] rounded-[20px]"
      : "w-[240px] h-[152px] rounded-[18px]";

  return (
    <div
      className={`relative overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.18)] ${dims} ${className}`}
      style={{
        background:
          "linear-gradient(135deg, #C9A6E8 0%, #E59BC4 25%, #F0B27A 55%, #F4D35E 85%, #FFE6A1 100%)",
      }}
    >
      {/* Apple logo */}
      <div className="absolute top-3 left-3 text-white/95" style={{ fontSize: size === "sm" ? 14 : 18 }}>
        <svg viewBox="0 0 384 512" width={size === "sm" ? 14 : 18} height={size === "sm" ? 16 : 22} fill="currentColor">
          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
        </svg>
      </div>
      {/* Mastercard logo */}
      <div className="absolute bottom-3 right-3 flex">
        <div className="w-5 h-5 rounded-full bg-[#EB001B] opacity-90" />
        <div className="w-5 h-5 rounded-full bg-[#F79E1B] -ml-2 opacity-90 mix-blend-multiply" />
      </div>
    </div>
  );
}
