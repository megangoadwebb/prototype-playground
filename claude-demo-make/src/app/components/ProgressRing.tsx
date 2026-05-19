import { ReactNode } from "react";

export function ProgressRing({
  size = 260,
  stroke = 22,
  progress = 1,
  children,
  color = "#34C759",
  topLabel,
  bottomLabel,
  labelColor = "#8E8E93",
  topBadge,
}: {
  size?: number;
  stroke?: number;
  progress?: number;
  children?: ReactNode;
  color?: string;
  topLabel?: string;
  bottomLabel?: string;
  labelColor?: string;
  topBadge?: ReactNode;
}) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - progress);

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <defs>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5BE584" />
            <stop offset="100%" stopColor="#1FAE4F" />
          </linearGradient>
        </defs>
        <circle cx={size / 2} cy={size / 2} r={radius} stroke="#EFEFF1" strokeWidth={stroke} fill="none" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color === "#34C759" ? "url(#ringGrad)" : color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          fill="none"
        />
      </svg>
      {(topLabel || bottomLabel) && (
        <svg width={size} height={size} className="absolute inset-0 pointer-events-none">
          <defs>
            <path
              id={`curveTop-${size}`}
              d={`M ${size / 2},${stroke / 2 + 2} a ${radius + stroke / 2 - 4},${radius + stroke / 2 - 4} 0 1,1 -0.01,0`}
              fill="none"
            />
          </defs>
          <text fill={labelColor} style={{ fontSize: 10, letterSpacing: 2 }}>
            {topLabel && (
              <textPath href={`#curveTop-${size}`} startOffset="25%" textAnchor="middle">
                {topLabel}
              </textPath>
            )}
            {bottomLabel && (
              <textPath href={`#curveTop-${size}`} startOffset="75%" textAnchor="middle">
                {bottomLabel}
              </textPath>
            )}
          </text>
        </svg>
      )}
      {topBadge && (
        <div
          className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
          style={{ top: -6 }}
        >
          {topBadge}
        </div>
      )}
      <div className="absolute inset-0 flex items-center justify-center">{children}</div>
    </div>
  );
}
